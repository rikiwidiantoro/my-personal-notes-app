import React from "react";
// import '../../style/style.css';
import HeaderCari from "./HeaderCari";

function Header() {
    return(
        <div className="note-app__header">
            <h1>Notes</h1>
            <HeaderCari />
        </div>
    );
}

export default Header;