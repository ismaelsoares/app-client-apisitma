import React from 'react';
import Input from './input';
import Logo from './logo';
import LoginForm from './loginForm';
import Mappersmith from 'mappersmith';
import manifest from '../manifest';

module.exports = React.createClass({
  onSubmit(username, password){
    let ServerAPI = Mappersmith.forge(manifest);
    let date = { username: username, password: password };
    ServerAPI.access.login({body: date})
      .then((res) => {
        const access_token = res.data.token;
        alert(res.data.token)
        console.log(res.data);
      })
      .catch((err) => {console.log(err.data);
      });
  },

  render(){
    return(
      <div>
        <div id='logo'>
          <Logo />
        </div>
        <div id='loginForm'>
          <LoginForm  onSubmit={this.onSubmit} />
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

$.ajax({
            url: "http://api.sitma.com.br/v1/login",
            dataType: 'json',
            type: 'POST',
            data: {
                username: username,
                password: password
            },
            success: function(data) {
                this.setState({

            });
        },
*/
