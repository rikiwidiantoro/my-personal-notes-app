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
    }

    render() {
        return (
            <div>
                <Header />
                {/* <Main /> */}
                <Main notes={this.state.notes} />
            </div>
        );
    }
}

export default App;