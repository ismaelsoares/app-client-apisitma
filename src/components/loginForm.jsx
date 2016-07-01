import React from 'react';

module.exports = React.createClass({
  getInitialState(){
    return{ username: '', password: ''};
  },

  handleUsernameChange(event){
    this.setState({username: event.target.value});
  },

  handlePasswordChange(event){
    this.setState({password: event.target.value});
  },

  handleSubmit(event){
    event.preventDefault();
    this.props.onSubmit(this.state.username, this.state.password);
  },

  render(){
    return(
      <div>
        <form className="formLogin" onSubmit={this.handleSubmit}>
          <div>
            <input placeholder={"Usuário"} type={"text"} onChange={this.handleUsernameChange} name='username'required />
            <input placeholder={"Senha"} type={"password"} onChange={this.handlePasswordChange} name='password'required />
          </div>
          <div>
            <button type='submit'>Logar</button>
          </div>
        </form>
      </div>
    );
  }
});
/*
  login(resolve, reject){
        Api.resources.Post({username: username, password: password})
          .then((resp) => resolve(resp.data))
          .catch((errResp) => reject(errResp.data));
  },
*/
