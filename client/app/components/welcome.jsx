import React from 'react';
import AuthContainer from './auth';

class Welcome extends React.Component {

  componentDidMount() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('on-welcome');
  }

  componentWillUnmount() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('on-welcome');
  }

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
