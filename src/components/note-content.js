import React from 'react';
import marked from 'marked';

const NoteContent = (props) => {
  return (
    <div className="noteBody" dangerouslySetInnerHTML={{ __html: marked(props.note.text || '') }} />
  );
};
export default NoteContent;
