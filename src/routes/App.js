import React from 'react';

import SideBar from '../components/SideBar';

export default class App extends React.Component {
  render() {
    return (
      <div className='app container'>
        <h1>React Email</h1>
        <div className='sidebar container'><SideBar /></div>
        <div className='mailbox container'>{this.props.children}</div>
      </div>
    );
  }
}
