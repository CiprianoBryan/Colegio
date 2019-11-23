import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from '../pages/Login';
import Panel from '../pages/Panel';
import Notas from '../pages/Notas';
import Asistencias from '../pages/Asistencias';
import NotFound from '../pages/NotFound';
import Layout from './Layout';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/panel" component={Panel}/>
                    <Route exact path="/notas" component={Notas}/>
                    <Route exact path="/asistencias" component={Asistencias}/>
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;