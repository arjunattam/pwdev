//@ts-check
const fse = require('fs-extra');
const path = require('path');
const md = require('markdown-it')({ typographer: true });
const slugify = require('slugify');

// TODO: pick from automation
const srcDir = `/Users/arjun/playwright/docs`;
const destDir = `./docs`;

function slugger(text) {
  return slugify(text, { lower: true, strict: true });
}

function getTitle(contents) {
  const env = {};
  md.use(require('markdown-it-title'), 0).render(contents, env);
  return env.title;
}

function removeHeadingLine(contents) {
  const lines = contents.split('\n');
  const findIndex = lines.findIndex(l => l.startsWith('# '));
  return lines.slice(findIndex+1).join('\n');
}

function writeFrontmatter(filePath) {
  const contents = fse.readFileSync(filePath).toString();
  const title = getTitle(contents);
  const fileName = path.basename(filePath, path.extname(filePath));
  const fm = `---\nid: ${fileName}\ntitle: "${title}"\n---\n\n`;
  const newContents = removeHeadingLine(contents);
  fse.writeFileSync(filePath, `${fm}${newContents}`);
}

function closeTags(filePath) {
  // replaces <img> with <img/> and <br> with <br/>
  // + special handling for troubleshooting.md
  const contents = fse.readFileSync(filePath).toString();
  const newContents = contents.replace(/(<img("[^"]*"|[^\/">])*)>/gi, "$1/>")
                              .replace(/(<br("[^"]*"|[^\/">])*)>/gi, "$1/>")
                              .replace('<br/>\n</details>', '<br/>\n\n</details>')
  fse.writeFileSync(filePath, newContents);
}

function markdownFiles(dir) {
  let files = [];
  fse.readdirSync(dir).forEach(file => {
    let fullPath = path.join(dir, file);
    if (fse.lstatSync(fullPath).isDirectory()) {
      files.push(...markdownFiles(fullPath));
    } else {
      files.push(fullPath);
    }
  });
  return files.filter(name => name.endsWith('.md'));
}

function keepOnlyMarkdownFiles(dir) {
  fse.readdirSync(dir).forEach(file => {
    let fullPath = path.join(dir, file);
    if (fse.lstatSync(fullPath).isDirectory()) {
      keepOnlyMarkdownFiles(fullPath);
    } else {
      if (!fullPath.endsWith('.md')) {
        fse.removeSync(fullPath);
      }
    }
  });
}

function splitApi(contents) {
  const tokens = md.parse(contents, {});
  const headings = tokens.filter(t => t.type === 'heading_open' && t.tag === 'h3');
  const lineNums = headings.map(h => h.map[0]);
  const pairs = lineNums.reduce(function (result, value, index, array) {
    if (index < array.length-1) {
      result.push(array.slice(index, index + 2));
    } else {
      result.push([value, contents.split('\n').length]);
    }
    return result;
  }, []);
  const lines = contents.split('\n');
  // TODO: copy footnote links to all pages 
  // TODO: also fix the links since we are splitting api.md

  pairs.forEach(p => {
    fse.mkdirpSync(path.join(destDir, 'api'));
    const contents = lines.slice(p[0], p[1]).join('\n');
    const title = getTitle(contents);
    const slug = slugger(title);
    const filePath = path.join(destDir, 'api', `${slug}.md`);
    // promote headings by 2 levels
    const newContents = contents.replace(/###/g, '#').replace(/####/g, '##').replace(/#####/g, '###');
    fse.writeFileSync(filePath, newContents);
  })
}

function generateApiSidebar(contents) {
  // parse the table of contents
  const tokens = md.parse(contents, {});
  const ul = tokens.find(t => t.type === 'bullet_list_open');
  const listItems = tokens.filter(t => t.type === 'inline' && t.map[0] >= ul.map[0] && t.map[1] <= ul.map[1] );
  const ids = listItems.map(li => li.children.find(c => c.type === 'text')).map(t => t.content).map(slugger);
  return {
    api: [{
      type: 'category',
      label: "API reference",
      items: ids.map(id => `api/${id}`),
      collapsed: false
    }]
  }
}

function generateDocsSidebar(contents) {
  const tokens = md.parse(contents, {});
  const ol = tokens.find(t => t.type === 'ordered_list_open');
  const headings = tokens.filter(t => t.type === 'inline' && t.map[0] >= ol.map[0] && t.map[1] <= ol.map[1] && t.level === 3);

  function subList(headingToken) {
    const ul = tokens.find(t => t.type === 'bullet_list_open' && t.map[0] >= headingToken.map[0]);
    const items = tokens.filter(t => t.type === 'inline' && t.map[0] >= ul.map[0] && t.map[1] <= ul.map[1]);
    const hrefs = items.map(i => i.children[0].attrs[0][1]);
    return {
      type: 'category',
      label: headingToken.content,
      items: hrefs.filter(h => h.endsWith('.md')).map(h => h.replace('./', '').replace('.md', '')).filter(h => h !== 'api'),
      collapsed: false
    }
  }
  return { docs: headings.map(subList) };
}

// Main
fse.mkdirpSync(destDir);
fse.emptyDirSync(destDir);
fse.copySync(srcDir, destDir);
keepOnlyMarkdownFiles(destDir);

// Transform API reference
const api = fse.readFileSync(path.join(destDir, 'api.md')).toString();
splitApi(api);
const apiSidebar = generateApiSidebar(api);

// Transform markdown files
const files = markdownFiles(destDir);
files.forEach(filePath => {
  writeFrontmatter(filePath);
  closeTags(filePath);
});

// Create sidebar
const sidebar = {
  ...generateDocsSidebar(fse.readFileSync(path.join(destDir, 'README.md')).toString()),
  ...apiSidebar
};
fse.writeFileSync('sidebars.js', `module.exports = ${JSON.stringify(sidebar)};`);