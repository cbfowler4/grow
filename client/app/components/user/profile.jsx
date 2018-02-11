import React from 'react';
import ProfilePhotos from './profile_photos';
import HabitsListContainer from './habits_list';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className='profile'>
        <ProfilePhotos />
        yo im a profile
        <HabitsListContainer />
      </div>
    );
  }
}

export default Profile;
