import React from 'react';
import Input from './input';
import Login from './login';

module.exports = React.createClass({
  getInitialState(){
    return{Component : Login};
  },

  toHandler(component){
    this.setState({
      Component : component
    });
  },

  render(){
    let {Component} = this.state;
    return(
      <Component toHandler={this.toHandler} />

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
