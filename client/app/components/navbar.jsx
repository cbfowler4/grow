import React from 'react';

class NavBar extends React.Component {
  render () {
    return (
      <nav className='nav'>
        <div className='left'>
          <h1>Grow.</h1>
        </div>

        <div className='right'>
          <ul>
            <li><a>Sign Up</a></li>
            <li><a>Login</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
