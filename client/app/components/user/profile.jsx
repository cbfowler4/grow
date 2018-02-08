import React from 'react';
import ProfilePhotos from './profile_photos';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className='profile'>
        <ProfilePhotos />
        yo im a profile
      </div>
    );
  }
}

export default Profile;
