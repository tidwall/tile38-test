const fs = require("fs");

const topicsPath = "./old_topics/";
const commandsPath = "./old_commands/";

const paths = [topicsPath, commandsPath];

for (path of paths) {
  console.log(path.toUpperCase());
  const files = fs.readdirSync(path);
  files.forEach(file => {
    const data = fs.readFileSync(path + file, "utf8");
    // console.log(typeof data);
    const codeBlock = data.match(/\`\`\`([a-z]+([0-9]+)?)(-?[a-z]+)?/g);
    if (codeBlock !== null) {
      for (item of codeBlock) {
        console.log(file.replace(" ", "-").replace(".md", ""), item);
      }
    }
  });
}
