import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { getInitialData } from '../utils/index';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
            inputSearch: '',
        }

        this.onDeleteFungsi = this.onDeleteFungsi.bind(this);
        this.onTambahNotesFungsi = this.onTambahNotesFungsi.bind(this);
        this.onArsipFungsi = this.onArsipFungsi.bind(this);
        this.unArsipFungsi = this.unArsipFungsi.bind(this);

        this.SearchNoteHandle = this.SearchNoteHandle.bind(this);

    }

    onDeleteFungsi(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({notes});
    }
    onTambahNotesFungsi({title, body}) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: Date(),
                    }
                ]
            }
        });
    }

    onArsipFungsi(id) {
        let note = this.state.notes.filter(note => note.id === id);
        note[0].archived = true;

        let newNote = this.state.notes.filter(note => note.id !== id);

        this.setState((prevstate) => {
            return {
                ...prevstate,
                notes: [
                    ...newNote,
                    note[0]
                ]
            }
        });
    }
    unArsipFungsi(id){
        let note = this.state.notes.filter(note => note.id === id);
        note[0].archived = false;

        let newNote = this.state.notes.filter(note => note.id !== id);

        this.setState((prevstate) => {
            return {
                ...prevstate,
                notes: [
                    ...newNote,
                    note[0]
                ]
            }
        });
    }
    SearchNoteHandle(value){
        this.setState((prevstate) => {
            return {
                ...prevstate,
                inputSearch: value
            }
        });
    }

    render() {
        return (
            <div>
                <Header searchNote={this.SearchNoteHandle}/>
                <Main notes={this.state.notes} onDelete={this.onDeleteFungsi} onArsip={this.onArsipFungsi} unArsip={this.unArsipFungsi} tambahNotes={this.onTambahNotesFungsi} inputSearch={this.state.inputSearch} />
                <Footer />
            </div>
        );
    }
}

export default App;