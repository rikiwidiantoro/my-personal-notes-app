import React from "react";
// import '../../style/style.css';
import InputCatatan from "./InputCatatan";
import ItemCatatan from "./ItemCatatan";
import ArsipCatatan from "./ArsipCatatan";



// import { getInitialData } from '../../utils/index';

function Main({notes, onDelete, onArsip, unArsip, tambahNotes, inputSearch}) {
    return(
        <div className="note-app__body">
            <InputCatatan tambahNotes={tambahNotes} />
            <h2>Catatan Aktif</h2>
            <ItemCatatan notes={notes} onDelete={onDelete} onArsip={onArsip} inputSearch={inputSearch} />
            <h2>Arsip</h2>
            <ArsipCatatan notes={notes} inputSearch={inputSearch} onDelete={onDelete} unArsip={unArsip} />
        </div>
    );
}

// class Main extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             notes: getInitialData(),
//             // notes: [
//             //     {
//             //       id: 5,
//             //       title: "ESM",
//             //       body: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
//             //     },
//             //     {
//             //       id: 6,
//             //       title: "Module Bundler",
//             //       body: "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
//             //     },
//             //   ]
//         }
//     }

//     render() {
//         return (
//             <div className="note-app__body">
//                 <InputCatatan />
//                 <h2>Catatan Aktif</h2>
//                 <ItemCatatan notes={this.state.notes} />
//                 <h2>Arsip</h2>
//                 <ArsipCatatan />
//             </div>
//         );
//     }
// }

export default Main;