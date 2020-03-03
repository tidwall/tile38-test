const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;

const fs = require("fs");

class Commands extends React.Component {
  render() {
    const { config: siteConfig } = this.props;
    const commandGroups = this.props.config.commandGroups;
    const allCommands = this.props.config.allCommands;
    let selectedGroup = "all";

    const FilterBar = props => (
      <div className="filterbar">
        <div className="filterbar-group left-group" key="filterbar-left-group">
          {props.groups
            .filter(g => g === "all" || g === "common")
            .sort()
            .map(groupName => (
              <a
                className={`link-${groupName === "all" ? "" : groupName}`}
                key={`link-${groupName}`}
                href={`#${groupName === "all" ? "" : groupName}`}
              >
                {groupName[0].toUpperCase() + groupName.slice(1)}
              </a>
            ))}
        </div>
        <div
          className="filterbar-group right-group"
          key="filterbar-right-group"
        >
          {props.groups
            .filter(g => g !== "all" && g !== "common")
            .sort()
            .map(groupName => (
              <a
                className={`link-${groupName}`}
                key={`link-${groupName}`}
                href={`#${groupName}`}
                onClick={() => this.handleClick(groupName)}
              >
                {groupName[0].toUpperCase() + groupName.slice(1)}
              </a>
            ))}
        </div>
      </div>
    );

    const CommandsList = props => (
      <article className="commands-list">
        {Object.keys(props.commands)
          .sort()
          .map(command => (
            <p
              className={`command grp-${props.commands[command].group}${
                props.commands[command].isCommon ? " grp-common" : ""
              }`}
              key={`cmd-${command}`}
            >
              <strong>
                <a
                  href={`${props.config.baseUrl}commands/${props.commands[command].fileName}/`}
                >
                  {command}
                </a>
              </strong>
              : {props.commands[command].summary}
            </p>
          ))}
      </article>
    );

    return (
      <div className="docMainWrapper wrapper commandsWrapper">
        <Container className="mainContainer postContainer docsContainer commandsContainer">
          <div className="post">
            <div className="commandtable">
              <h1 className="w700">Commands</h1>
              <FilterBar groups={commandGroups}></FilterBar>
              <CommandsList
                commands={allCommands}
                config={siteConfig}
              ></CommandsList>
            </div>
          </div>
        </Container>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            var llink = null
            function hashed(){
              var h = ""
              var all = document.querySelectorAll(".commandtable .command")
              if (window.location.hash.length > 0){
                h = window.location.hash.slice(1)
              }
              if (h != ""){
                for (var i=0;i<all.length;i++){
                  all[i].style.display = 'none';
                }
                var items = document.querySelectorAll(".commandtable .command.grp-"+h)
                for (var i=0;i<items.length;i++){
                  items[i].style.display = '';
                }
              } else{
                for (var i=0;i<all.length;i++){
                  all[i].style.display = '';
                }
              }
              if (llink){
                llink.style.fontWeight = 300;
              }
              var link = document.querySelector(".link-"+h)
              if (link){
                link.style.fontWeight = 700
                llink = link;
              }
            }
            window.addEventListener("hashchange", function(){ hashed(); })
            hashed()
            var bar = document.querySelector(".commandtable .filterbar")
            if (bar){
              bar.style.display = 'flex';
            }`
          }}
        ></script>
      </div>
    );
  }
}

module.exports = Commands;
