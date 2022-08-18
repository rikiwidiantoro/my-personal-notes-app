import React from "react";

function ButtonArsip({id, archived, onArsip}) {
    return <button className="note-item__archive-button" onClick={() => onArsip({id, archived})}>Arsip</button>
}

export default ButtonArsip;