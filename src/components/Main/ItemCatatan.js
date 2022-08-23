import React from "react";
// import '../../style/style.css';
import NoteItem from "./Item/NoteItem";

function ItemCatatan({notes, onDelete, onArsip}) {
    // notes.map((note) => {
    //     if(note.archived == true) {

    
    //     }
    // });
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

export default ItemCatatan;