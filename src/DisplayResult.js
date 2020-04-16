import React from "react";

class DisplayResult extends React.Component {
  render() {
    return (
      <div>
        <p>Hello I'm</p>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

export default DisplayResult;
