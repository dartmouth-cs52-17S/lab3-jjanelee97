import React, { Component } from 'react';


class InputBar extends Component {
  constructor(props) {
    super(props);
    this.state = { newtitle: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ newtitle: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addNote(this.state.newtitle);
    this.setState({
      newtitle: '',
    });
  }

  render() {
    return (
      <div id="input-bar">
        <input placeholder="Type Here" onChange={this.onInputChange} value={this.state.newtitle} />
        <button onClick={this.handleSubmit}> Submit </button>
      </div>
    );
  }
}

export default InputBar;
