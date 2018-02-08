import React from 'react';
import { Route, Switch } from 'react-router';
// import HabitsList from './habits_list';
import Profile from './profile';
import Welcome from './welcome';
import NavBar from './navbar';


const App = () => (
  <div>
      <NavBar />
    <Switch>
      <Route path="/users/:_id" component={Profile}/>
      <Route path="/" component={Welcome}/>
    </Switch>
  </div>
);



export default App;
