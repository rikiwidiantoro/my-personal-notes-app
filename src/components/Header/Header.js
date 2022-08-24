import React from "react";
// import '../../style/style.css';
import HeaderCari from "./HeaderCari";

function Header({searchNote}) {
    return(
        <div className="note-app__header">
            <h1>Notes</h1>
            <HeaderCari searchNote={searchNote} />
        </div>
    );
}

export default Header;