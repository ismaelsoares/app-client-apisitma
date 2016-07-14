import React from 'react';
import Login from './login';

module.exports = React.createClass({
  getInitialState(){
    return{Component : Login, Token: '', props: undefined};
  },

  toHandler(component, props){
    this.setState({
      Component : component,
      props: props
    });
  },

  toAuth(token){
    this.setState({
      Token : token
    })
  },

  render(){
    let {Component} = this.state;
    let {Token} = this.state;
    return(
      <Component toHandler={this.toHandler} toAuth={this.toAuth} {...this.state.props} />

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
