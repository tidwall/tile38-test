const fs = require("fs");

const topicsPath = "./old_topics/";
const commandsPath = "./old_commands/";

const paths = [topicsPath, commandsPath];

for (path of paths) {
  const files = fs.readdirSync(path);
  files.forEach(file => {
    if (!file.includes("2") && file.includes(".md")) {
      const data = fs.readFileSync(path + file, "utf8");

      // example BROKEN links:
      // [WITHIN](/commands/within)
      // [webhooks](/commands/sethook)
      // example WORKING links:
      // [WITHIN](./../commands/within)
      // [webhooks](./../commands/sethook)
      const slash_links = data.match(/\]\(\//g);
      if (slash_links) {
        let output = file + ",";

        output += slash_links ? slash_links.length : 0;
        console.log(output);
      }
    }

    // const links = data.match(/\[[a-zA-z]+\]\([.]\)/g);
    // console.log(file.magenta);
    // console.log(links);
    // console.log("");
  });
}
