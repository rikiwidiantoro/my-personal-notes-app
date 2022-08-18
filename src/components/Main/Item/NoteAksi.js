import React from "react";
import ButtonDelete from './aksi/ButtonDelete';
import ButtonArsip from './aksi/ButtonArsip';

function NoteAksi({ id, onDelete, onArsip, archived }) {
    return (
        <div className="note-item__action">
            <ButtonDelete id={id} onDelete={onDelete} />
            <ButtonArsip id={id} archived={archived} onArsip={onArsip} />
        </div>
    );
}

export default NoteAksi;