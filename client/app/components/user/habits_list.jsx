import React from 'react';
import Habit from './habit';
import { connect } from 'react-redux';
import { getUserHabits } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserHabits: (user) => dispatch(getUserHabits(user)),
  };
};

class HabitsList extends React.Component {
  constructor(props) {
    super(props);
    this.habits = [];
    this.userId = props.match.params._id;

  }

  componentDidMount() {
    this.habits = this.props.getUserHabits(this.userId);
  }

  render() {
    const habitsList = this.habits.map((habit)=>{
      return (<Habit habit={habit}/>);
    });

    return (
      <ul>start of habits list
        {habitsList}
      </ul>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HabitsList));
