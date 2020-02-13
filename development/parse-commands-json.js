const fs = require("fs");

const rawdata = fs.readFileSync("commands.json");
const commands = JSON.parse(rawdata);

let groups = {};
let props = {};
let options = {};

for (command of Object.keys(commands)) {
  const group = commands[command].group;
  const obj_props = Object.keys(commands[command]);
  groups[group] = (groups[group] || 0) + 1;
  for (prop of obj_props) {
    props[prop] = (props[prop] || 0) + 1;
    if (prop === "arguments") {
      const args = commands[command][prop].map(arg =>
        arg.command ? arg.command : arg.name
      );
      console.log(command, args);
    }
  }
}

console.log(groups);
console.log(props);

// fs.writeFile("../docs/test.md", "# Hello content!", function(err) {
//   if (err) throw err;
//   console.log("Saved!");
// });
