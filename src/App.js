import React,{Fragment} from 'react';

import { HashRouter, Route, Switch } from 'react-router-dom'
import Index from './pages/index'
import Login from './pages/login'
import Order from './pages/order'
function App() {
  return (
    <Fragment>
      <HashRouter>
        <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/order' component={Order}/>
            <Route path='/'  component={Index}/>
        </Switch>
      </HashRouter>
    </Fragment>
  );
}

export default App;
