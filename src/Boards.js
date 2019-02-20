import React, { Component } from "react";

// import "./App.css";
var api = require("./utils/api");

function BoardList(props) {
  return (
    <ul>
      {props.boards.map(board => (
        <li key={board.name}>{board.name}</li>
      ))}
    </ul>
  );
}

class Boards extends Component {
  constructor(props) {
    super();
    this.state = {
      allBoards: null,
      selectedBoards: null
    };
  }

  componentDidMount() {
    api.fetchAllBoards().then(
      function(allBoards) {
        this.setState(function() {
          return {
            allBoards: allBoards
          };
        });
      }.bind(this)
    );
  }

  render() {
    return (
      <div>
        {!this.state.allBoards ? (
          <p>LOADING!</p>
        ) : (
          <BoardList boards={this.state.allBoards} />
        )}
      </div>
    );
  }
}

export default Boards;
