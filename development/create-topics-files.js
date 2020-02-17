const fs = require("fs");

const topicsPath = "./old_topics/";
const paths = [topicsPath];

for (path of paths) {
  const files = fs.readdirSync(path);
  files.forEach(file => {
    const data = fs.readFileSync(path + file, "utf8");

    // compose header element: id, title, sidebar_label
    const fileId = file.replace(".md", "");
    const title = file.replace("-", " ").toUpperCase();
    const sidebar_label = title;
    const header = getHeader(fileId, title, sidebar_label);
  });
}

// HEADER
function getHeader(id, title, sidebarLabel) {
  const header = `id: ${id}\ntitle: ${title}\nsidebar_label: ${sidebarLabel}`;

  return "---\n" + header + "\n---\n\n";
}

// BODY
function getTopicBody(fileName) {
  let data = fs.readFileSync("./old_commands/" + fileName, "utf8");
  const mdHeadEnd = data.match(/-->/);
  const bodyBeginIndex = mdHeadEnd.index + 3;
  let body = "## Description\n\n" + data.slice(bodyBeginIndex).trim() + "\n";

  // replace /assets/images with /img
  if (body.match(/\/assets\/images/g)) {
    body = body.replace(/\/assets\/images/g, "/img");
  }

  // replace codeblock tag 'tile38-json' with 'json'
  if (body.match(/\`\`\`tile38-json/g)) {
    console.log("found a tile38-json match!".cyan);
    body = body.replace(/\`\`\`tile38-json/g, "```json");
  }

  // replace codeblock tag 'tile38' with 'tile38-cli'
  if (body.match(/\`\`\`tile38/g)) {
    console.log("found a tile38 match!".magenta);
    body = body.replace(/\`\`\`tile38/g, "```tile38-cli");
  }

  return body;
}
