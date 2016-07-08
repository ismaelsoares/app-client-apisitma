import React from 'react';
import Me from './me';
import Login from './login';

let Dashboard = React.createClass({
  logout(){
    this.props.toHandler(Login);
  },
  render(){
    return(
      <div>
          <button onClick={this.logout}>Sair</button>
      </div>
    );
  }
});

export default Dashboard;
