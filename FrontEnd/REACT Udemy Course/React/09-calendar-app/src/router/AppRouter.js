import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginSreen';

import { CalendarScreen } from '../components/calendar/CalendarScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/login" element={ <LoginScreen/> } />      
                    <Route exact path="/" element={ <CalendarScreen/> } />

                </Routes>
            </div>
        </Router>
    )
}
