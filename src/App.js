import React from 'react';
import UserPage from './components/Page/UserPage.js';
import DepartmentPage from './components/Page/DepartmentPage.js';
import Home from './components/Home.js';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Login from './components/Authenticate/Login.js'
import PrivateRoute from './components/Tool/PrivateRoute.js'
import UserAddPage from './components/Page/UserAddPage.js';

function App() {
  return (
    <div>
      <BrowserRouter>
          <PrivateRoute exact path='/' component={Home} />
          <Route path='/login' component={Login} />

          <PrivateRoute path='/department' component={DepartmentPage} />

          <PrivateRoute path='/user' component={UserPage}/>

      </BrowserRouter>
    </div>
  );
}

export default App;
