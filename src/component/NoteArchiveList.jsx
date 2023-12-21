import React from "react";
import NoteArchive from "./NoteArchive";

function NoteArchiveList({ archivedNotes, onArchive, onRestore, onDelete }) {
    return (
        <div className="note-list">
            {archivedNotes.map((archivedNotes) => (
                <NoteArchive key={archivedNotes.id} id={archivedNotes.id} onRestore={onRestore} onArchive={onArchive} onDelete={onDelete} {...archivedNotes} />
            ))}
        </div>
    );
}

export default NoteArchiveList;
