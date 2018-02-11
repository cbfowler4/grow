import React from 'react';
import Habit from './habit';
import { getUserHabits } from '../../actions/user_actions';

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // getUserHabits: (user) => dispatch(getUserHabits(user)),
  };
};

class HabitsList extends React.Component {
  constructor(props) {
    super(props);
    this.habits = [];
  }

  componentDidMount() {
    // this.habits = getUserHabits();
  }

  render() {
    const habitsList = this.habits.map((habit)=>{
      return (<Habit habit={habit}/>);
    });
  }
}
