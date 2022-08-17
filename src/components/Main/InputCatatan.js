import React from "react";
// import '../../style/style.css';


class InputCatatan extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
        }

        this.onChangeJudul = this.onChangeJudul.bind(this);
        this.onChangeBody = this.onChangeBody.bind(this);
        this.onSubmitData = this.onSubmitData.bind(this);
    }

    onChangeJudul(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            }
        });
    }
    onChangeBody(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }
    onSubmitData(event) {
        event.preventDefault();
        this.props.tambahNotes(this.state);
    }

    render() {
        return (
            <div className="note-input">
                <h2>Buat catatan</h2>
                <form onSubmit={this.onSubmitData}>
                    <p className="note-input__title__char-limit">Sisa karakter: 50</p>
                    <input className="note-input__title" type='text' placeholder='Ini adalah judul ...' required value={this.state.title} onChange={this.onChangeJudul} />
                    <textarea className="note-input__body" placeholder="Tuliskan catatanmu di sini ..." required value={this.state.body} onChange={this.onChangeBody} ></textarea>
                    <button type="submit">Buat</button>
                </form>
            </div>
        );
    }
}

// function InputCatatan() {
//     return(
//         <div className="note-input">
//             <h2>Buat catatan</h2>
//             <form>
//                 <p className="note-input__title__char-limit">Sisa karakter: 50</p>
//                 <input className="note-input__title" type='text' placeholder='Ini adalah judul ...' required />
//                 <textarea className="note-input__body" placeholder="Tuliskan catatanmu di sini ..." required></textarea>
//                 <button>Buat</button>
//             </form>
//         </div>
//     );
// }

export default InputCatatan;