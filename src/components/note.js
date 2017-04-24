import React, { Component } from 'react';
import Draggable from 'react-draggable';
import NoteContent from './note-content';

class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
    };
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onDrag = this.onDrag.bind(this);
    this.onEditOrSaveClick = this.onEditOrSaveClick.bind(this);
    this.renderNoteContent = this.renderNoteContent.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onDeleteClick(event) {
    this.props.deleteNote(this.props.note.id);
  }

  onDrag(event, position) {
    console.log('test');
    this.props.update(this.props.note.id, { x: position.x, y: position.y });
  }

  onEditOrSaveClick(event) {
    this.setState({ isEditing: !this.state.isEditing });
  }

  onInputChange(event) {
    this.props.update(this.props.note.id, { text: event.target.value });
  }

  renderNoteContent() {
    return (
      <Draggable
        handle=".fa-arrows-alt"
        grid={[25, 25]}
        defaultPosition={{ x: 20, y: 20 }}
        position={{ x: this.props.note.x, y: this.props.note.y }}
        onDrag={this.onDrag}
      >
        <div className="note">
          <div className="top-row">
            {this.props.note.title}
            <div className="button-row">
              <i onClick={this.onDeleteClick} className="fa fa-trash-o" />
              { this.state.isEditing ?
                <i
                  onClick={this.onEditOrSaveClick}
                  value={this.props.note.text}
                  className="fa fa-check"
                /> :
                <i
                  onClick={this.onEditOrSaveClick}
                  className="fa fa-pencil"
                />
              }
              <i onDrag={this.onDrag} className="fa fa-arrows-alt" />
            </div>
          </div>
          { this.state.isEditing ?
            <textarea onChange={this.onInputChange} className="editing-input" value={this.props.note.text} /> :
            <div className="note-area"><NoteContent note={this.props.note} /></div>}
        </div>
      </Draggable>
    );
  }

  render() {
    return (
      <div>
        {this.renderNoteContent()}
      </div>
    );
  }
}


export default Note;
