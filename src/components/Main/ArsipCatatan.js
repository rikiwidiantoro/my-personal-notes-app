import React from "react";
import NoteItem from "./Item/NoteItem";
// import '../../style/style.css';
// import {showFormattedDate} from '../../utils/index';

// function ArsipCatatan({notes, onDelete, onArsip}) {
function ArsipCatatan({notes, inputSearch, onDelete, unArsip}) {
    return (
        <div className="notes-list">
            {
                notes.length ?

                notes.filter((note) => {
                    if (inputSearch === '') {
                        return note;
                    }else if (note.title.toLowerCase().includes(inputSearch.toLowerCase())) {
                        return note;
                    }
                    return false;
                }).map((note, key) => 
                    note.archived && <NoteItem key={key} onDelete={onDelete} unArsip={unArsip} {...note} />
                )
                            :
                <p className="notes-list__empty-message">Tidak ada catatan</p>
            }
            {
                notes.length ? 
                notes.filter(note => note.archived).length <= 0 && <p className="notes-list__empty-message">Tidak ada catatan</p> 
                            : false
            }
        </div>
    );
    

    
    // return <p className="notes-list__empty-message">Tidak ada catatan</p>;
    
}

export default ArsipCatatan;