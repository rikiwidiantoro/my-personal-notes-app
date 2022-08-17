import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { getInitialData } from '../utils/index';

// function App() {
//     return(
//         <div>
//             <Header />
//             <Main />
//         </div>
//     );
// }

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
        }

        this.onDeleteFungsi = this.onDeleteFungsi.bind(this);
        this.onTambahNotesFungsi = this.onTambahNotesFungsi.bind(this);
        this.onArsipFungsi = this.onArsipFungsi.bind(this);
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

    // fungsi arsip
    onArsipFungsi(id) {
        const noteId = this.state.notes.filter(note => note.id !== id);
        this.setState({noteId});

        const arsip = document.querySelector('.note-item');

        const bodi = document.querySelector('.note-app__body');

        const emptyCatatan = document.querySelector('.notes-list__empty-message');
        emptyCatatan.remove();

        bodi.append(arsip);

        console.log(noteId.id);

        


    }

    render() {
        return (
            <div>
                <Header />
                {/* <Main /> */}
                <Main notes={this.state.notes} onDelete={this.onDeleteFungsi} onArsip={this.onArsipFungsi} tambahNotes={this.onTambahNotesFungsi} />
                <Footer />
            </div>
        );
    }
}

export default App;