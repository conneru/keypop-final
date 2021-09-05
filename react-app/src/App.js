import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "./components/LoginFormModal/LoginForm";
import SignUpForm from "./components/SignupFormModal/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./store/session";
import AllListings from "./components/AllListings";
import CreateListing from "./components/CreateListing";
import ListingPage from "./components/ListingPage";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import ProfilePage from "./components/ProfilePage";

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <ProtectedRoute path="/sell">
          <CreateListing />
        </ProtectedRoute>
        <Route path="/listings" exact={true}>
          <AllListings />
        </Route>
        <Route path="/listings/:id">
          <ListingPage />
        </Route>
        <Route path="/profile/:userId" exact={true}>
          <ProfilePage />
        </Route>
        <Route path="/" exact={true}>
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
