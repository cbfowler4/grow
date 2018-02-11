import React from 'react';
import Habit from './habit';
import { connect } from 'react-redux';
import { showAddHabit, hideAddHabit } from '../../actions/ui_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state  => {
  return {
    addHabitStatus: state.ui.addHabit
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showAddHabit: () => dispatch(showAddHabit()),
    hideAddHabit: () => dispatch(hideAddHabit()),
  };
};

class HabitsList extends React.Component {
  constructor(props) {
    super(props);

    this.defaultState = {
      title: "",
      description: ""
    };
    this.state= this.defaultState;

    this.toggleShowAddition = this.toggleShowAddition.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleHabitSubmit = this.handleHabitSubmit.bind(this);
  }

  toggleShowAddition (e) {
    if (this.props.addHabitStatus) {
      this.props.hideAddHabit();
    } else {
      this.props.showAddHabit();
    }
    e.stopPropagation();
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    }
  }

  handleHabitSubmit (e) {
    console.log('submitting...');
    console.log(this.state);
    this.setState(this.defaultState);
    e.stopPropagation();
  }

  componentDidMount() {
  }

  render() {
    if (this.props.user) {
      const habitsList = this.props.user.habits.map((habit)=>{
        return (<Habit habit={habit}/>);
      });

      const addHabit = this.props.addHabitStatus ? (
        <div className='add-habit-shown'>
          <form>
            <input
              type='text'
              placeholder='Enter Habit'
              value={this.state.title}
              onChange={this.handleChange('title')}/>

            <textarea
              placeholder='Enter a short description (optional)...'
              value={this.state.description}
              onChange={this.handleChange('description')}></textarea>


            <div id='cadence'>
              <span>To be completed every </span>
              <div>
                <input type="number"></input>
                <select>
                  <option value="hours">Hours</option>
                  <option value="days">Days</option>
                  <option value="weeks">Weeks</option>
                  <option value="months">Months</option>
                </select>
              </div>
            </div>
            <button onClick={this.handleHabitSubmit}>Add Habit</button>
          </form>
          <button onClick={this.toggleShowAddition}>Hide habit addition</button>
        </div>
      ) : (
        <div className="add-habit-hidden">
          <button onClick={this.toggleShowAddition}>Add a habit</button>
        </div>
      );

      return (
        <ul className='habits-list'>start of habits list
          {habitsList}
          {addHabit}
        </ul>
      );
    } else {
      return (null);
    }
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HabitsList));
