import React from 'react';
import Driver from './DriverData';
import axios from 'axios';

class Drivers extends React.Component {
  state={
    driver:[ ]
  };

  componentDidMount() {
    axios.get('http://localhost:4000/api/driver')
    .then((response)=>{
      this.setState({driver:response.data.driver});
    })
    .catch((error)=>{
      console.log(error);
    })
  
  }
  //To turn function to class add class name and extend app to include React.Component
  //Put the return in a render
  render(){
    return (
      <div className="App">
        <p>
          <Driver myDrivers={this.state.driver}></Driver>
        </p>
      </div>
    );
  }
  
}

export default Drivers;