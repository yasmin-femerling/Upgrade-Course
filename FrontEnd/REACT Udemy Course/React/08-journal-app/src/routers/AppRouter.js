import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

import { useDispatch } from "react-redux";

import { firebase } from "../firebase/firebase-config";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";

import { JournalScreen } from "../components/journal/JournalScreen";
import { login } from "../actions/auth";
import { PublicRoute } from "./PublicRoute";
import { startLoadingNotes } from "../actions/notes";
export const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {

        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
        dispatch(startLoadingNotes(user?.uid));
        
      } else {

        setIsLoggedIn(false);

      }

      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return (
      <div className="m-5">
        <div className="spinner-grow text-primary" role="status"><span className="sr-only">Loading...</span></div>O<div className="spinner-grow text-secondary" role="status"><span className="sr-only">Loading...</span></div>A<div className="spinner-grow text-success" role="status"><span className="sr-only">Loading...</span></div>D<div className="spinner-grow text-danger" role="status"><span className="sr-only">Loading...</span></div>I<div className="spinner-grow text-warning" role="status"><span className="sr-only">Loading...</span></div>N<div className="spinner-grow text-info" role="status"><span className="sr-only">Loading...</span></div>G...
      </div>
    );
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/auth"
            component={AuthRouter}
            isAuthenticated={isLoggedIn}
          />

          <PrivateRoute
            exact
            isAuthenticated={isLoggedIn}
            path="/"
            component={JournalScreen}
          />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
