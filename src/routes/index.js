import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import search from '../pages/searchPage/index'
import response from '../pages/responsePage/index'
import teste from '../pages/testes/index'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={search} />
            <Route exact path="/res" component={response} />
            <Route exact path="/teste" component={teste} />
        </Switch>
    </BrowserRouter>
)

export default Routes;