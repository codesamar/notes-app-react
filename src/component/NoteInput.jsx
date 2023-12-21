import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            note: '',
            remainingChars: 50,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onNoteChangeEventHandler = this.onNoteChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const inputText = event.target.value;
        if (inputText.length <= 50) {
            this.setState(() => {
                return {
                    title: inputText,
                    remainingChars: 50 - inputText.length,
                }
            });
        }
    }

    onNoteChangeEventHandler(event) {
        this.setState(() => {
            return {
                note: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                <input className="note-input_title" type="text" placeholder="Masukkan judul.." value={this.state.title} onChange={this.onTitleChangeEventHandler} required maxLength={50} />
                <p>Sisa Karakter: {this.state.remainingChars}</p>
                <textarea className="note-input_note" type="text" placeholder="Masukkan catatan disini.." value={this.state.note} onChange={this.onNoteChangeEventHandler} required />
                <button type="submit">Simpan</button>
            </form>
        )
    }
}

export default NoteInput;