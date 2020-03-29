import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Calculator from './pages/Calculator'
import About from './pages/About'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Calculator} />
                <Route path="/about" component={About} />
            </Switch>
        </BrowserRouter>
    );
}