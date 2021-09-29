import Admin from "admin/Admin";
import Contact from "components/Contact/Contact";
import DefaultLayout from "components/layout/DefaultLayout";
import About from "Pages/About/About";
import Blog from "Pages/Blog/Blog";
import Home from "Pages/Home/Home";
import LandingPage from "Pages/LandlingPage/LandingPage";
import Project from "Pages/Project/Project";
import Service from "Pages/Service/Service";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "views/Users/SignIn";
import Signup from "views/Users/Signup";

const AppRouter = ({ children }) => {
  return (
    <Router>
      <DefaultLayout>
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Route exact path="/" component={Home} />
            <Route path="/landing-page" component={LandingPage} />
            <Route path="/about" component={About} />
            <Route path="/project" component={Project} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={Signup} />
            <Route path="/contact" component={Contact} />
            <Route path="/service" component={Service} />
            <Route path="/blog" component={Blog} />
            <Route path="/admin" component={Admin} />
          </Suspense>
        </Switch>
      </DefaultLayout>
    </Router>
  );
};

export default AppRouter;
