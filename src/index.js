import React, { Component } from 'react';
import Immutable from 'immutable';
import ReactDOM from 'react-dom';
import InputBar from './components/input-bar';
import Note from './components/note';
import * as firebasedb from './firebasedb';
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

  componentDidMount() {
    firebasedb.fetchNotes((notes) => {
      this.setState({ notes: Immutable.Map(notes) });
    });
  }

  addNote(text) {
    firebasedb.addNote(text);
  }

  deleteNote(id) {
    firebasedb.deleteNote(id);
  }

  update(id, fields) {
    firebasedb.update(id, Object.assign({}, this.state.notes.get(id), fields));
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
