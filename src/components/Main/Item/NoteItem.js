import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteAksi from "./NoteAksi";

function NoteItem({title, createdAt, body}) {
    return (
        <div className="note-item">
            <NoteItemContent title={title} createdAt={createdAt} body={body} />
            <NoteAksi />
        </div>
    );
}

export default NoteItem;