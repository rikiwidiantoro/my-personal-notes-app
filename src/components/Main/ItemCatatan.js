import React from "react";
// import '../../style/style.css';
import NoteItem from "./Item/NoteItem";

function ItemCatatan({notes, onDelete, onArsip, inputSearch}) {

    return (
        <div className="notes-list">
            {/* {
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
            } */}
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
                    !note.archived && <NoteItem key={note.id} id={note.id} onDelete={onDelete} onArsip={onArsip} {...note}/>
                )
                            :
                <p>Tidak ada catatan</p>
            }
            {
                notes.length ? notes.filter(note => !note.archived).length <= 0 && <p>Tidak ada catatan</p> : false
            }
        </div>
    );
}

export default ItemCatatan;