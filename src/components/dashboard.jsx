import React from 'react';
import Me from './me';
import Faq from './faq';
import Login from './login';
import Mappersmith from 'mappersmith';
import manifest from '../manifest';
const header = {Authorization: 'Bearer' + 'Token'};

module.exports = React.createClass({
  me(event){
    event.preventDefault();
    let AcessApi = Mappersmith.forge(manifest);
    AcessApi.access.me({
      headers: {
        Authorization: `Basic ${this.props.token}`
      }
    })
    .then((res) => {
      console.log(res.data);
      this.props.toHandler(Me);
    }).catch((err) => {
      console.log(err.data);
    })
  },

  faq(event){
    event.preventDefault();
    this.props.toHandler(Faq);
  },
  render(){
    return(
      <div>
          <button onClick={this.me}>Configurações de Usuário</button>
          <button onClick={this.faq}>FAQ</button>
      </div>
    );
  }
});
/*fetch(username, {
  method: 'GET',
  headers :{
    'Authorization': 'Bearer' + 'token'
  }
}).then((res)) => res.text())
.then((content) =>{
  this.setState({
    base64: content
  })
})*/
