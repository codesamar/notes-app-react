import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchive }) {
  return (
    <div className="note-list">
      {notes.map((notes) => (
        <NoteItem key={notes.id} id={notes.id} onDelete={onDelete} onArchive={onArchive} {...notes} />
      ))}
    </div>
  );
}

export default NoteList;
