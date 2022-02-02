import React from 'react';
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
    Navigate as Redirect} from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
  return (
        <Router>
            <div>
                <NavBar/>
                <div className='container'>
                    <Switch>
                        <Route path="/about" element={<AboutScreen/>}/>
                        <Route path="/login" element={<LoginScreen/>}/>
                        <Route path="/" element={<HomeScreen/>}/>
                        <Route path="*" element={<Redirect to="/"/>}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
};
