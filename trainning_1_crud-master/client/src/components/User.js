import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Edit from './Edit';


import Accueil from './Accueil';

function User() {

    return ( 
        <div>
            <div>
                <Router>
                    <Routes>
                        <Route path="/" exact element={<Accueil/>}/>
                        <Route path="/Edit/:id" exact element={<Edit/>}/>
                   </Routes>
                </Router>
            </div>
        </div>
     );
}

export default User;

