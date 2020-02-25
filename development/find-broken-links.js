const fs = require("fs");

const topicsPath = "./old_topics/";
const commandsPath = "./old_commands/";

const paths = [topicsPath, commandsPath];

for (path of paths) {
  const files = fs.readdirSync(path);
  files.forEach(file => {
    if (!file.includes("2") && file.includes(".md")) {
      console.log(file);
      const data = fs.readFileSync(path + file, "utf8");

      // example links
      // [WITHIN](/commands/within)
      // [webhooks](/commands/sethook)
      const links = data.match(/\[[a-zA-Z]+\]\(/g);
      console.log(links);
      console.log("");
    }

    // const links = data.match(/\[[a-zA-z]+\]\([.]\)/g);
    // console.log(file.magenta);
    // console.log(links);
    // console.log("");
  });
}
