import React from "react";
import NoteItemArchive from "./NoteItemArchive";
import NoteActionRestore from "./NoteActionRestore";

function NoteArchive({ id, title, createdAt, note, onRestore, onDelete }) {

    return (
        <div className="note-item">
            <NoteItemArchive title={title} createdAt={createdAt} note={note} />
            <NoteActionRestore id={id} onRestore={onRestore} onDelete={onDelete}/>
        </div>
    );
}

export default NoteArchive;