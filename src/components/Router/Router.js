import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from '../Landing/Landing';
import App from '../../App';
import NotFound from '../NotFound/NotFound';

const Router = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/order/:city' component={App} />
            <Route path='*' component={NotFound} />
        </Switch>  
    </BrowserRouter>
)

export default Router;