import React from "react";

function ButtonArsip({id, onArsip}) {
    return <button className="note-item__archive-button" onClick={() => onArsip(id)}>Arsip</button>
}

export default ButtonArsip;