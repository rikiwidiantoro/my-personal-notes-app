import React from "react";
// import '../../style/style.css';
import NoteItem from "./Item/NoteItem";

function ItemCatatan({notes, onDelete}) {
    return (
        <div className="notes-list">
            {
                notes.map((note) => (
                    <NoteItem 
                    key={note.id}
                    id={note.id}
                    onDelete={onDelete}
                    {...note}
                    />
                ))
            }
        </div>
    );
}

export default ItemCatatan;