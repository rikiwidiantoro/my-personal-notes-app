import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteAksi from "./NoteAksi";

function NoteItem({title, createdAt, body, id, onDelete, onArsip }) {
    return (
        <div className="note-item">
            <NoteItemContent title={title} createdAt={createdAt} body={body} />
            <NoteAksi id={id} onDelete={onDelete} onArsip={onArsip} />
        </div>
    );
}

export default NoteItem;