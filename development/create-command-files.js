const fs = require("fs");

const rawdata = fs.readFileSync("commands.json");
const commands = JSON.parse(rawdata);

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

// write individual COMMAND files
for (command of Object.keys(commands)) {
  const fileId = command.toLowerCase().replace(" ", "-");
  const props = commands[command];
  const group = props.group;

  // compose header element: id, title, sidebar_label
  const title = command;
  const sidebar_label = commonCommands.includes(command)
    ? command
    : "__no_label";
  const header = getHeader(fileId, title, sidebar_label);

  // compose full-syntax element
  const syntax = getSyntax(command, props.arguments);

  // grab command body from old markdown file
  const fileName = fileId + ".md";
  const commandBody = getCommandBody(fileName);

  // compose related commands list with links
  const relatedCommands = getRelatedCommands(command, group, commands);

  // write all elements to new command file
  writeFile(fileId, header, syntax, commandBody, relatedCommands);
}

// write ALL COMMANDS file
const allFileId = "all-commands";
const allTitle = "All Commands";
const allSidebarLabel = "All Commands";

const allHeader = getHeader(allFileId, allTitle, allSidebarLabel);
let allBody = "";
for (command of Object.keys(commands).sort()) {
  allBody += `**[${command}](${command.toLowerCase().replace(" ", "-") +
    ".html"})** - ${commands[command].summary}\n\n`;
}

writeFile(allFileId, allHeader, null, allBody, null);

/* 
file building functions 
*/

// HEADER
function getHeader(id, title, sidebarLabel) {
  const header = `id: ${id}\ntitle: ${title}\nsidebar_label: ${sidebarLabel}`;

  return "---\n" + header + "\n---\n\n";
}

// SYNTAX
function getSyntax(command, args) {
  let syntax = "## Full Syntax\n\n";
  syntax += command;
  if (args) {
    syntax += " ";
    args.forEach(arg => {
      if (arg.command) {
        syntax += arg.command + " ";
      } else if (arg.name) {
        syntax += arg.name + " ";
      }
    });
  }
  syntax = syntax.trim();
  syntax += "\n\n---\n\n";

  return syntax;
}

// BODY
function getCommandBody(fileName) {
  let data = fs.readFileSync("./old_commands/" + fileName, "utf8");
  const mdHeadEnd = data.match(/-->/);
  const bodyBeginIndex = mdHeadEnd.index + 3;
  let body = "## Description\n\n" + data.slice(bodyBeginIndex).trim() + "\n";

  // replace /assets/images with /img
  if (body.match(/\/assets\/images/g))
    body = body.replace(/\/assets\/images/g, "/img");

  return body;
}

// RELATED COMMANDS
function getRelatedCommands(thisCommand, thisGroup, commands) {
  let output = "\n## Related Commands\n\n";
  let relatedCommands = [];

  for (command of Object.keys(commands)) {
    if (commands[command].group === thisGroup) {
      relatedCommands = [...relatedCommands, command];
    }
  }

  sortedCommands = relatedCommands.sort();

  output += sortedCommands
    .map((command, idx) =>
      command === thisCommand
        ? `**[${command}](${command
            .toLowerCase()
            .replace(" ", "-")}.html)**<br>`
        : `[${command}](${command.toLowerCase().replace(" ", "-")}.html)<br>`
    )
    .join("\n");

  return output;
}

// WRITE FILE
function writeFile(
  name,
  header = null,
  syntax = null,
  commandBody = null,
  relatedCommands = null
) {
  const content =
    (header ? header : "") +
    (syntax ? syntax : "") +
    (commandBody ? commandBody : "") +
    (relatedCommands ? relatedCommands : "");

  fs.writeFile(`../docs/commands/${name}.md`, content, function(err) {
    if (err) throw err;
    console.log(`${name} Saved!`);
  });
}
