import React from "react";
import ButtonDelete from './aksi/ButtonDelete';
import ButtonArsip from './aksi/ButtonArsip';

function NoteAksi({ id, onDelete }) {
    return (
        <div className="note-item__action">
            <ButtonDelete id={id} onDelete={onDelete} />
            <ButtonArsip />
        </div>
    );
}

export default NoteAksi;