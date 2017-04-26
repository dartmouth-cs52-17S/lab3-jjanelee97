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
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onDeleteClick(event) {
    console.log(this.props.id);
    this.props.deleteNote(this.props.id);
  }

  onDrag(event, position) {
    console.log(position.x);
    console.log(position.y);

    if (position.y > -50 && position.x > 0) {
      this.props.update(this.props.id, { x: position.x, y: position.y });
    }
  }

  onEditOrSaveClick(event) {
    this.setState({ isEditing: !this.state.isEditing });
  }

  onTitleChange(event) {
    this.props.update(this.props.id, { title: event.target.value });
  }

  onInputChange(event) {
    this.props.update(this.props.id, { text: event.target.value });
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
            <div className="top-row-right">
              { this.state.isEditing ?
                <input onChange={this.onTitleChange} className="editing-title" value={this.props.note.title} /> :
                <span className="note-title">
                  {this.props.note.title}
                </span>}
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
            </div>

            <div className="top-row-left">
              <i onDrag={this.onDrag} className="fa fa-arrows-alt" />
            </div>
          </div>
          { this.state.isEditing ?
            <textarea onChange={this.onInputChange} className="editing-input" value={this.props.note.text} /> :
            <NoteContent note={this.props.note} />}
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
