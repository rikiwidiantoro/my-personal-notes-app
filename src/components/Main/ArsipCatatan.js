import React from "react";
import NoteItem from "./Item/NoteItem";
// import '../../style/style.css';
// import {showFormattedDate} from '../../utils/index';

function ArsipCatatan({notes, onDelete, onArsip}) {
    // notes.map((note) => {
    //     if(note.archived === false) {
    //         return <p className="notes-list__empty-message">Tidak ada catatan</p>;
    //     } else if(note.archived === true) {
    //         return (
    //             <div className="notes-list">
    //             {
    //                 notes.map((note) => (
    //                     <NoteItem 
    //                     key={note.id}
    //                     id={note.id}
    //                     // onDelete={onDelete}
    //                     // onArsip={onArsip}
    //                     // archived={note.archived}
    //                     {...note}
    //                     />
    //                 ))
    //             }
    //         </div>
    //         // return <p className="notes-list__empty-message">Tidak ada catatan</p>;
    //         );
    //         }

    // });

    const statuss = notes.filter(not => not.archived);
    if(statuss == true) {
        return (
            <div className="notes-list">
                {
                    notes.map((note) => (
                        <NoteItem 
                        key={note.id}
                        id={note.id}
                        onDelete={onDelete}
                        onArsip={onArsip}
                        // archived={note.archived}
                        {...note}
                        />
                    ))
                }
            </div>
        );
    }

    
    return <p className="notes-list__empty-message">Tidak ada catatan</p>;
    
}

export default ArsipCatatan;