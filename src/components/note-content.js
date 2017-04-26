import React from 'react';
import marked from 'marked';

const NoteContent = (props) => {
  return (
    <div className="note-body" dangerouslySetInnerHTML={{ __html: marked(props.note.text || '') }} />
  );
};
export default NoteContent;
