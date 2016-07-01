import React from 'react';

let Input = React.createClass({
  render(){
    return(
      <input placeholder={this.props.placeholder} type={this.props.type} name={this.props.name}/>
    );
  }
});
export default Input;
