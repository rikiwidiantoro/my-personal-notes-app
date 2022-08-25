import React from "react";
// import '../../style/style.css';

function HeaderCari({searchNote}) {
    return(
        <div className="note-search">
            <input type='search' placeholder='Cari catatan ...' onInput={(event) => searchNote(event.target.value) }/>
        </div>
    );
}

export default HeaderCari;