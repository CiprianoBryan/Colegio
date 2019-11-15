import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import Page from '../pages/Page';
// import NotFound from '../pages/NotFound';
import Layout from './Layout';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    {/* <Route exact path="/path" component={Page}/>
                    <Route component={NotFound}/> */}
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;