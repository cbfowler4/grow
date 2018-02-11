import React from 'react';
import ProfilePhotos from './profile_photos';
import HabitsListContainer from './habits_list';
import { getUserInfo } from '../../actions/user_actions';
import { connect } from 'react-redux';


const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.match.params._id;
  return {
    user: state.entities.users[userId],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserInfo: (user) => dispatch(getUserInfo(user)),
  };
};

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.userId = props.match.params._id;

  }

  componentDidMount () {
    this.props.getUserInfo(this.userId);
  }

  render () {
    return (
      <div className='profile'>
        <ProfilePhotos />
        yo im a profile
        <HabitsListContainer user={this.props.user}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
