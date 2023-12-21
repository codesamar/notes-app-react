import React from "react";
import NoteList from "./NoteList";
import { getData } from "../data";
import NoteInput from "./NoteInput";
import NoteArchiveList from "./NoteArchiveList";

class NoteApp extends React.Component {
    state = {
        notes: [],
        archivedNotes: [],
        searchQuery: '',
    }

    constructor(props) {
        super(props);
        this.state = {
            notes: getData(),
            archivedNotes: [],
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(notes => notes.id !== id);
        this.setState({ notes });
    }

    onDeleteArchiveHandler = (id) => {
        const archivedNotes = this.state.archivedNotes.filter(note => note.id !== id);
        this.setState({ archivedNotes });
    }
    

    onAddNoteHandler({ title, note }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        note,
                        archived: false,
                        createdAt: new Date().toDateString(),
                    }
                ]
            }
        });
    }

    onArchiveHandler = (id) => {
        const updateNotes = this.state.notes.map((note) =>
            note.id === id ? { ...note, archived: true } : note
        );
    
        const archivedNote = updateNotes.find((note) => note.id === id);

        const archiveNotes = updateNotes.filter((note) => note.id !== id);
    
        this.setState((prevState) => ({
            notes: archiveNotes,
            archivedNotes: [...prevState.archivedNotes, archivedNote],
        }));
    };
    
    onRestoreHandler = (id) => {
        const restoredNote = this.state.archivedNotes.find((note) => note.id === id);
        if (!restoredNote) {
            console.error('Catatan tidak ditemukan dalam archivedNotes');
            return;
        }

        const updatedArchivedNotes = this.state.archivedNotes.filter(
            (note) => note.id !== id
        );

        this.setState((prevState) => ({
            notes: [...prevState.notes, restoredNote],
            archivedNotes: updatedArchivedNotes,
        }));
    };

    render() {
        const { notes, searchQuery } = this.state;

        const filteredNotes = searchQuery
            ? notes.filter(note =>
                note.title.toLowerCase().includes(searchQuery.toLowerCase())
            ) : notes;
        
        return (
            <div className="note-app">
                <h1>Notes App</h1>
                <h2>Buat Catatanmu</h2>
                <NoteInput addNote={this.onAddNoteHandler} />
                <input className="search" type="text" value={searchQuery} onChange={(e) => this.setState({searchQuery: e.target.value})} placeholder="Cari catatanmu..." />
                <h2>Catatan Aktif</h2>
                {this.state.notes.length === 0 ? (
                    <p className="noarchive">Belum ada catatan.</p>
                ) : (
                    <NoteList notes={filteredNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
                )}
                <h2>Arsip Catatan</h2>
                {this.state.archivedNotes.length === 0 ? (
                    <p className="noarchive">Tidak ada catatan yang diarsipkan.</p>
                ) : (
                    <NoteArchiveList archivedNotes={this.state.archivedNotes} onRestore={this.onRestoreHandler} onDelete={this.onDeleteArchiveHandler} />
                )}
            </div>
        );
    }
}

export default NoteApp;
