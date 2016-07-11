import React from 'react';
import Me from './me';
import Faq from './faq';
import Login from './login';

module.exports = React.createClass({
  me(event){
    event.preventDefault();
    this.props.toHandler(Me);
  },

  render(){
    return(
      <div>
          <button onClick={this.me}>Configurações de Usuário</button>
      </div>
    );
  }
});
