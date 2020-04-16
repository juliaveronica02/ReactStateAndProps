import React from "react";
import "./styles.css";
import DisplayResult from "./DisplayResult";
export default class App extends React.Component {
  state = {
    name: "Julia Veronica"
  };
  render() {
    return (
      <div className="App">
        <DisplayResult name={this.state.name} />
      </div>
    );
  }
}
