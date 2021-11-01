import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './components/pages/Home';

import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';

import NytimesState from './context/nytimes/NytimesState';
import AlertState from './context/alert/AlertState';


import Article from './components/articles/Article';
import NotFound from './components/pages/404';

import './App.css';

const App = () => {
    return (
        <NytimesState>
            <AlertState>
                <Router>
                    <div className="App">
                        <Navbar/>
                        <div className="container">
                            <Alert/>
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route exact path="/article/:id" component={Article}/>
                                <Route component={NotFound}/>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </AlertState>
        </NytimesState>
    );
};

export default App;
