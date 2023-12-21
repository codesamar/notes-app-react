import React from "react";

function NoteActionRestore({ id, onRestore, onDelete }) {
    return (
        <div className="note-item__action">
            <button className="note-item_delete" onClick={() => onDelete(id)}>Delete</button>
            <button className="note-item_arsip" onClick={() => onRestore(id)}>Pindahkan</button>
        </div>
    );
}

export default NoteActionRestore;