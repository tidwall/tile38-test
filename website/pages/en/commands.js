const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;

const fs = require("fs");

class Commands extends React.Component {
  render() {
    const { config: siteConfig } = this.props;

    const rawdata = fs.readFileSync("./static/json/commands.json");
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

    let allCommands = [];
    let groups = {};

    for (let command of Object.keys(commands)) {
      let group = commands[command].group;
      group =
        group === "pubsub"
          ? "channels"
          : group === "webhook"
          ? "webhooks"
          : group;
      if (groups[group]) {
        groups[group] = [...groups[group], command];
      } else {
        groups[group] = [command];
      }
      allCommands.push(command);
    }

    const Tabs = props => (
      <ul className="nav tab-bar tab-fill">
        <div className="tab-left-group" key="tab-left-group">
          <li className="tab-item" id="link-all" key="link-all">
            <a href="#" className="tab-link">
              All
            </a>
          </li>
          <li className="tab-item" id="link-common" key="link-common">
            <a href="#" className="tab-link">
              Common
            </a>
          </li>
        </div>
        <div className="tab-right-group" key="tab-right-group">
          {Object.keys(props.groups)
            .sort()
            .map(groupName => (
              <li
                className="tab-item"
                id={`link-${groupName}`}
                key={`link-${groupName}`}
              >
                <a className="tab-link" href="#">
                  {groupName[0].toUpperCase() + groupName.slice(1)}
                </a>
              </li>
            ))}
        </div>
      </ul>
    );

    return (
      <div className="docMainWrapper wrapper commandsWrapper">
        <Container className="mainContainer postContainer docsContainer commandsContainer">
          <div className="post">
            <header className="postHeader">
              <h1 id="__docusaurus" className="postHeaderTitle">
                Commands
              </h1>
            </header>
            <Tabs groups={groups}></Tabs>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Commands;
