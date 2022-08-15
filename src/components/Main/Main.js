import React from "react";
import '../../style/style.css';
import InputCatatan from "./InputCatatan";
import ItemCatatan from "./ItemCatatan";
import ArsipCatatan from "./ArsipCatatan";

function Main() {
    return(
        <div className="note-app__body">
            <InputCatatan />
            <h2>Catatan Aktif</h2>
            <ItemCatatan />
            <h2>Arsip</h2>
            <ArsipCatatan />
        </div>
    );
}

export default Main;