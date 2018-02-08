import React from 'react';

class ProfilePhotos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='profile-photos'>
        <div className='cover'>
          <img src="images/ben-frank.jpg"></img>
        </div>
        <div className='user'>
          <div className='avatar'>
            <img src="images/psyduck.svg"></img>
          </div>
        </div>
      </div>
    );

  }
}

export default ProfilePhotos;
