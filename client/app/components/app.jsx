import React from 'react';
import { Route, Switch } from 'react-router';
// import HabitsList from './habits_list';
import Profile from './user/profile';
import Welcome from './welcome';
import NavBar from './navbar';


const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Welcome}/>
      <Route path="/" component={NavBar}/>
    </Switch>
    <Switch>
      <Route path="/users/:_id" component={Profile}/>
    </Switch>
  </div>
);



export default App;
