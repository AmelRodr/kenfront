import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
//import Login from './components/auth/Login';
// import Profile from './components/auth/Profile';
// import PublicProfile from './components/users/PublicProfile';

const Routes = () => {
    return(
        <Switch>
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
        </Switch>
    )
}

export default Routes