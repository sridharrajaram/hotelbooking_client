import React from "react";
import "./App.css";
import Home from "./containers/Home";
import Rooms from "./containers/Rooms";
import SingleRoom from "./containers/SingleRoom";
import Error from "./containers/Error";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/bookingForm" component={Form} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
