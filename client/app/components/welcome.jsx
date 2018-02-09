import React from 'react';
import AuthContainer from './auth';

class Welcome extends React.Component {


  render() {
    return (
      <div className='welcome'>
        <main>
          <content>
            <h1>Grow.</h1>
            <h2>Build your positive habits and become the best version of yourself.</h2>
          </content>
          <aside>
            <AuthContainer />
          </aside>
        </main>
      </div>
    );
  }
}

export default Welcome;
