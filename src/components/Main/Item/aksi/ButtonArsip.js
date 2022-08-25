import React from "react";

function ButtonArsip({id, onArsip, unArsip, archived}) {
    // return <button className="note-item__archive-button" onClick={() => onArsip(id)} >Arsip</button>
    return <button className="note-item__archive-button" onClick={() => archived ? unArsip(id) : onArsip(id) } >{ archived ? 'Pindahkan' : 'Arsipkan' }</button>
}

export default ButtonArsip;