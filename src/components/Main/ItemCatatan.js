import React from "react";
// import '../../style/style.css';
import NoteItem from "./Item/NoteItem";

function ItemCatatan({notes}) {
    return (
        <div className="notes-list">
            {
                notes.map((note) => (
                    <NoteItem 
                    key={note.id}
                    {...note}
                    />
                ))
            }
        </div>
    );
}

export default ItemCatatan;