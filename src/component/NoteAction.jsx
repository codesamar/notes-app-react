import React from "react";

function NoteAction({ id, onDelete, onArchive }) {

    return (
        <div className="note-item__action">
            <button className="note-item_delete" onClick={() => onDelete(id)}>Delete</button>
            <button className="note-item_arsip" onClick={() => onArchive(id)}>Arsipkan</button>
        </div>
    );
}

export default NoteAction;