import React from "react";
import ButtonDelete from './aksi/ButtonDelete';
import ButtonArsip from './aksi/ButtonArsip';

function NoteAksi() {
    return (
        <div className="note-item__action">
            <ButtonDelete />
            <ButtonArsip />
        </div>
    );
}

export default NoteAksi;