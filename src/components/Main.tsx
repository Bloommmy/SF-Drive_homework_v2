import * as React from "react";
import "../styles/Main.css"
import Faq from "./Faq";
import NewUser from "./NewUser";
import { Route, Switch } from "react-router-dom";

function Main() {

    return (
        <main>
            <Switch>
                <Route path='/faq'>
                    <Faq />
                </Route>
                <Route path='/'>
                    <NewUser />
                </Route>
            </Switch>
        </main>
    );
}

export default Main;