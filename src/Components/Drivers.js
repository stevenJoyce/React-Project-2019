import React from 'react';
import Driver from './DriverData';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Drivers extends React.Component {
  constructor() {
    super();
    this.ReloadDataMethod = this.ReloadDataMethod.bind(this);
  }
  state = {
    driver: []
  };

  componentDidMount() {
    axios.get('http://localhost:4000/api/driver')
      .then((response) => {
        this.setState({ driver: response.data.driver });
      })
      .catch((error) => {
        console.log(error);
      })

  }
  ReloadDataMethod() {
    axios.get('http://localhost:4000/api/driver')
      .then((response) => {
        this.setState({ driver: response.data.driver })
      })
      .catch((error) => {
        console.log(error);
      });
  }
  //This will output the drivers onto the driver page
  //There is a link at the end of the page to add a new driver
  render() {
    return (
      <div className="App">
        <p>
          <Driver myDrivers={this.state.driver} ReloadDataMethod={this.ReloadDataMethod}></Driver>
        </p>
        <p>
          <Link to={"/AddDriver"} className="btn btn-primary"> Add Driver </Link>
        </p>

      </div>
    );
  }

}

export default Drivers;