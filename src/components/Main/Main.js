import React from "react";
import '../../style/style.css';
import InputCatatan from "./InputCatatan";
import ItemCatatan from "./ItemCatatan";
import ArsipCatatan from "./ArsipCatatan";

function Main() {
    return(
        <div className="note-app__body">
            <InputCatatan />
            <ItemCatatan />
            <ArsipCatatan />
        </div>
    );
}

export default Main;