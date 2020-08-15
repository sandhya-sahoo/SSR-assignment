import React from "react";


class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button 
        className={this.props.active ? "active" : "myBtn"} 
        key={this.props.key} 
        value={this.props.value}
      >
        {this.props.value}
      </button>
    );
  }
}
export default Button;
