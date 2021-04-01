import React from 'react';
import { FaBars } from "react-icons/fa";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function SideMenu(){
    return(
        <BrowserRouter>
            <React.Fragment>
                <Link to="#" className="menu-bars">
                    <FaBars style={{color: 'black'}} />
                </Link>
            </React.Fragment>
            <Switch>
                <Route path="/">
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default SideMenu;