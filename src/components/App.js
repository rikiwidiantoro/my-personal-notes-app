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

        // this.tambahToSelesai = this.tambahToSelesai.bind(this);
        // this.buatTombolSelesai = this.buatTombolSelesai.bind(this);
        // this.cekTombol = this.cekTombol.bind(this);
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
    // cekTombol(){
    //     buatTombolSelesai(event) {
    //         this.onArsipFungsi(event.target.parentElement.parentElement);
    //     };
    // }
    // buatTombolSelesai(eventListener) {
    //     const tombol = document.createElement("input");
    //     tombol.setAttribute('type', 'submit');
    //     tombol.setAttribute('value', 'Selesai dibaca');
    //     // tombol.classList.add(buttonTypeClass);
    //     tombol.addEventListener('click', function(event) {
    //         eventListener(event);
    //     });
    //     return tombol;
    // }
    // onArsipFungsi(id) {
    //     const noteId = this.state.notes.filter(note => note.id !== id);
    //     // const coba = this.state.notes.filter(note => note.id === id);
    //     this.setState({noteId});

    //     // const arsip = document.querySelector('.note-item');

    //     // const bodi = document.querySelector('.note-app__body');

    //     const emptyCatatan = document.querySelector('.notes-list__empty-message');
    //     emptyCatatan.remove();

    //     // bodi.append(arsip);

    //     // console.log(arsip);

    // }



    onArsipFungsi(id) {
        const noteId = this.state.notes.filter(note => note.id === id);
        const noteIdi = this.state.notes.filter(note => note.id !== id);
        // const gantiArsipStatus = this.state.notes.filter(note => note.archived === archived);
        // const aa = this.setState(noteId => {
        //     return {
        //         notes: noteId.archived = true
        //     };
        // });
        // this.setState({noteId});

        // gantiArsipStatus = true;
        const aa = noteId.map((nn) => {
            nn.archived = true;
        })
        this.setState({aa});
        // const aa = this.state.notes.map((nn) => {
        //     nn.archived = true;
        // })
        // this.setState(aa);
        

        console.log(noteId);
        console.log(noteIdi);
        // return

        // console.log(id);
        // this.setState({gantiArsipStatus});

        // const status = noteId[0].archived;
        // console.log(status);
        
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