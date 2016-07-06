import React from 'react';
import Me from './me';

let newData = {
  data: 'Welcome to Dashboard API Sitma!'
};

let Dashboard = ComposedComponent => class extends React.Component{
  componentDidMount(){
      this.setState({
        data : newData.data
      });
  }

  render(){
    return(
      <div>
        <ComposedComponent {...this.props} {...this.state}/>
      </div>
    );
  }
};

export default Dashboard;
