import React from "react";
import '../../style/style.css';

function InputCatatan() {
    return(
        <div className="note-input">
            <h2>Buat catatan</h2>
            <form>
                <p className="note-input__title__char-limit">Sisa karakter: 50</p>
                <input type='text' placeholder='Ini adalah judul ...' />
                <textarea placeholder="Tuliskan catatanmu di sini ..."></textarea>
                <button>Buat</button>
            </form>
        </div>
    );
}

export default InputCatatan;