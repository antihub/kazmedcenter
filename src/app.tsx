import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './pages/main';

const App = () => (
    <div>
        <Switch>
            <Route exact path='/' component={Main}/>
        </Switch>
    </div>
)

export default App;