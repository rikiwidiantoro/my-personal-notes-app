import React from "react";

function Footer() {
    const tahunSekarang = new Date();
    return (
        <div className="note-app__footer">
            <p>&copy; {tahunSekarang.getFullYear()} | Riki Widiantoro | Github: <a href="https://github.com/rikiwidiantoro" target="_blank">rikiwidiantoro</a> | Email: <a href="mailto:rikitoro12@gmail.com?subject=subject text" target="_blank">rikitoro12@gmail.com</a></p>
            
        </div>
    );
}

export default Footer;