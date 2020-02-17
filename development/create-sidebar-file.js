const fs = require("fs");

const rawdata = fs.readFileSync("commands.json");
const commands = JSON.parse(rawdata);
let categories = {
  docs: {
    "Getting Started": [
      "topics/installation",
      "topics/object-types",
      "topics/command-line-interface",
      "topics/network-protocols",
      "topics/client-libraries",
      "topics/replication"
    ],
    Geofences: ["topics/geofencing", "topics/roaming-geofences"],
    Commands: []
  }
};

let noLabelCommands = [];
const commonCommands = [
  "SET",
  "GET",
  "DEL",
  "NEARBY",
  "INTERSECTS",
  "WITHIN",
  "SETHOOK",
  "SETCHAN",
  "SUBSCRIBE"
];

let commonGroup = {
  type: "subcategory",
  label: "Common",
  ids: []
};

const rootDir = "commands/";

// common commands pushed to commonGroup subcat, not-common commands to Commands
for (command of Object.keys(commands)) {
  const fileId = rootDir + command.toLowerCase().replace(" ", "-");
  if (commonCommands.includes(command)) {
    commonGroup.ids.push(fileId);
  } else {
    noLabelCommands.push(fileId);
  }
}

// sort and add common commands to Common subcategory
commonGroup.ids.sort();
noLabelCommands = ["commands/all-commands", ...noLabelCommands.sort()];

categories.docs.Commands.push(commonGroup);
categories.docs.Commands = [...categories.docs.Commands, ...noLabelCommands];

// write content to file
const content = JSON.stringify(categories);
fs.writeFile(`../website/sidebars.json`, content, function(err) {
  if (err) throw err;
  console.log(`Saved!`);
});
