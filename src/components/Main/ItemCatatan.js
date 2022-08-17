import React from "react";
// import '../../style/style.css';
import NoteItem from "./Item/NoteItem";

function ItemCatatan({notes, onDelete, onArsip}) {
    return (
        <div className="notes-list">
            {
                notes.map((note) => (
                    <NoteItem 
                    key={note.id}
                    id={note.id}
                    onDelete={onDelete}
                    onArsip={onArsip}
                    {...note}
                    />
                ))
            }
        </div>
    );
}

export default ItemCatatan;