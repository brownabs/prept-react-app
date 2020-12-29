import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FlashCard from '../views/FlashCard';
import NotFound from '../views/NotFound';
import Home from '../views/Home';

export default function Routes() {
  // let's create our Switch component which will render the first <Route> that matches the location, right.
  // to start, we're going to create public Routes for our application
  // let's create our Route for our landing page and pass our home component

  // let's also link our Not Found component - our switch case default in case no paths are found
  // let's briefly take a look at Not Found index.js

  // go to browser and check the Home Page and Navbar

  // let's create our Route to our /flash-card path in N, also add Prept link for homePage
  // go back to Navbar - index.js file and create path to /flash-card link

  // now that we have the Home page and navbar complete, let's create the Route path for our Flashcards - index file

  return (
      <Switch>
        <Route
          exact
          path='/'
          component={() => <Home/>}
        />
           <Route
          exact
          path='/flash-card'
          component={() => <FlashCard/>}
        />
        <Route component={NotFound} />
      </Switch>
  );
}
