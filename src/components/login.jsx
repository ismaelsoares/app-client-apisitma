import React from 'react';
import Logo from './logo';
import Dashboard from './dashboard';
import Mappersmith from 'mappersmith';
import manifest from '../manifest';

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

  onSubmit(event){
    event.preventDefault();
    this.handleSubmit(this.state.username, this.state.password);
  },

  handleSubmit(username, password){
    let ServerAPI = Mappersmith.forge(manifest);
    let date = { username: username, password: password };
    ServerAPI.access.login({body: date})
      .then((res) => {
        const access_token = res.data.token;
        console.log(res.data);
        this.props.toHandler(Dashboard);
      })
      .catch((err) => {
        console.log(err.data);
      });
  },

  render(){
    return(
      <div>
        <div id='logo'>
          <Logo />
        </div>
        <div>
          <form className="formLogin" onSubmit={this.onSubmit}>
            <div>
              <input placeholder={"Usuário"} type={"text"} onChange={this.handleUsernameChange} name='username'required />
              <input placeholder={"Senha"} type={"password"} onChange={this.handlePasswordChange} name='password'required />
            </div>
            <div>
              <button type='submit'>Logar</button>
            </div>
          </form>
        </div>
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
