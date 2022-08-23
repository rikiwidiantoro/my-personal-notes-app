import React from "react";
import NoteItem from "./Item/NoteItem";
// import '../../style/style.css';
// import {showFormattedDate} from '../../utils/index';

// function ArsipCatatan({notes, onDelete, onArsip}) {
function ArsipCatatan({notes, inputSearch, onDelete}) {
    return (
        <div>
            {
                notes.length ?

                notes.filter((note) => {
                    if (inputSearch === '') {
                        return note
                    }else if (note.title.toLowerCase().includes(inputSearch.toLowerCase())) {
                        return note
                    }
                    return false
                }).map((note,key) => 
                    note.archived && <NoteItem key={key} onDelete={onDelete}  {...note} />
                )
                            :
                <p>Belum ada catatan</p>
            }
            {
                notes.length ? notes.filter(note => note.archived).length <= 0 && <p>Belum ada catatan</p> : false
            }
        </div>
    );
    

    
    // return <p className="notes-list__empty-message">Tidak ada catatan</p>;
    
}

export default ArsipCatatan;