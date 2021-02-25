import * as React from "react";

import "../styles/App.css";
import Header from "./Header";
import Main from "./Main";
import { BrowserRouter } from "react-router-dom";

function App() {
    let mainName = "Faq";

    return (
        <>
            <Header />
            <BrowserRouter>
                <Main />
            </BrowserRouter>
        </>
    );
}

export default App;