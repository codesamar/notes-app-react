import React from "react";

function NoteItemArchive({ title, createdAt, note }) {
    return (
    <div className="note-header">
        <h3 className="note-item_title">{title}</h3>
        <p className="note-item_date">{createdAt}</p>
        <p className="note-item_note">{note}</p>
    </div>
    );
}

export default NoteItemArchive;