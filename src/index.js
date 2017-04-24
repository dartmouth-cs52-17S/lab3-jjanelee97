import React, { Component } from 'react';
import Immutable from 'immutable';
import ReactDOM from 'react-dom';
import InputBar from './components/input-bar';
import Note from './components/note';
import './style.scss';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: Immutable.Map(),
      idcount: 0,
    };
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.update = this.update.bind(this);
  }

  addNote(text) {
    this.setState({
      notes: this.state.notes.set(this.state.idcount, { id: this.state.idcount, title: text, text: '', x: 30, y: 30 }),
      idcount: this.state.idcount + 1,
    });
  }

  deleteNote(id) {
    this.setState({
      notes: this.state.notes.delete(id),
    });
  }

  update(id, fields) {
    this.setState({
      notes: this.state.notes.update(id, (note) => { return Object.assign({}, note, fields); }),
    });
  }

  render() {
    return (
      <div id="layout">
        <InputBar addNote={text => this.addNote(text)} />
        <div>
          {this.state.notes.entrySeq().map(([id, note]) => {
            return <Note key={id} id={id} note={note} deleteNote={this.deleteNote} update={this.update} />;
          })}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
