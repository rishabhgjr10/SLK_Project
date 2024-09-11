// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import CreateDocument from './components/CreateDocument';
import DocumentList from './components/DocumentList';

const App = () => {
    const [token, setToken] = useState(localStorage.getItem('token') || '');

    return (
        <Router>
            <nav>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
                <Link to="/create-document">Create Document</Link>
                <Link to="/documents">Document List</Link>
            </nav>

            <Switch>
                <Route path="/register" component={Register} />
                <Route path="/login">
                    <Login setToken={setToken} />
                </Route>
                <Route path="/create-document">
                    <CreateDocument token={token} />
                </Route>
                <Route path="/documents">
                    <DocumentList token={token} />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
