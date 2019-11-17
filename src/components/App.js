import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Layout from './Layout';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;