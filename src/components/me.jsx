import React from 'react';

module.exports = React.createClass({
  render(){
    return(
      <div>
        <h1>Sobre Você</h1>
        <input disabled name="name"/>
        <input disabled name="username"/>
        <input disabled name="email"/>
      </div>
    );
  }
});
