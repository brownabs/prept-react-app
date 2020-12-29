import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FlashCard from '../views/FlashCard';
<<<<<<< HEAD
import NotFound from '../views/NotFound';
import Home from '../views/Home';
=======
import Home from '../views/Home';
import NotFound from '../views/NotFound';
>>>>>>> c30ee86fdea1bacb5175ccfa435412c13e95598c

export default function Routes() {
  return (
      <Switch>
        <Route
<<<<<<< HEAD
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
=======
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
>>>>>>> c30ee86fdea1bacb5175ccfa435412c13e95598c
  );
}
