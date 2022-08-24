import React from "react";
// import '../../style/style.css';

function HeaderCari({searchNote}) {
    return(
        <input type='search' placeholder='Cari catatan ...' onInput={(event) => searchNote(event.target.value) }/>
    );
}

export default HeaderCari;