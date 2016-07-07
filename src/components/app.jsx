import React from 'react';
import Input from './input';
import LoginForm from './loginForm';
import Mappersmith from 'mappersmith';
import manifest from '../manifest';


let App = ComposedComponent => class extends React.Component{
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
  }

  render(){
    return(
      <div>
        <div id='loginForm'>
          <ComposedComponent onSubmit={this.onSubmit} {...this.state} {...this.props}/>
        </div>
      </div>
    );
  }
};

export default App(LoginForm);

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
