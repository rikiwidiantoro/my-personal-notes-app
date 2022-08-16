import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import { getInitialData } from '../utils/index';

// function App() {
//     return(
//         <div>
//             <Header />
//             <Main />
//         </div>
//     );
// }

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
        }

        this.onDeleteFungsi = this.onDeleteFungsi.bind(this);
    }

    onDeleteFungsi(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({notes});
    }

    render() {
        return (
            <div>
                <Header />
                {/* <Main /> */}
                <Main notes={this.state.notes} onDelete={this.onDeleteFungsi} />
            </div>
        );
    }
}

export default App;