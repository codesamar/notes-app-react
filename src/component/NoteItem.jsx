import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteAction from "./NoteAction";

function NoteItem({ title, createdAt, note, id, onDelete, onArchive, archived,  }) {

    return (
        <div className="note-item">
            <NoteItemContent title={title} createdAt={createdAt} note={note} />
            <NoteAction id={id} onDelete={onDelete} onArchive={onArchive} archived={archived} />
        </div>
    );
}

export default NoteItem;