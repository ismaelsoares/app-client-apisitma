import React from 'react';

module.exports = React.createClass({
  render(){
    return(
      <div>
        <h1>Sobre Você</h1>
        <form>
          <div>
            <h3>Nome</h3>
            <input disabled name="name"/>
            </div>
          <div>
            <h3>Nome de usuário</h3>
            <input disabled name="username"/>
          </div>
          <div>
            <h3>Email</h3>
            <input disabled name="email"/>
          </div>
          <div>
            <button type='submit'>Editar Dados</button>
          </div>
        </form>
      </div>
    );
  }
});
