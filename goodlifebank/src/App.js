import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Accounts from "./pages/Accounts";
// import Application from "./pages/Application";
// import Learningoverview from "./pages/Learningoverview";
// import Learningstory from "./pages/Learningoverview/Learningstory";
// import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Homeadvertsfilter from "./components/Homeadvertsfilter";
import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper"; 

const App = () =>
  <Router>
    <div>
      <Navbar />

        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />

      <Footer />
    </div>
  </Router>;

export default App;
