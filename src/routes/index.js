import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import search from '../pages/index'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={search} />
        </Switch>
    </BrowserRouter>
)

export default Routes;