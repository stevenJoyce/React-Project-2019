import React from 'react';
import {Link} from 'react-router-dom';

class Driver extends React.Component {
  //To turn function to class add class name and extend app to include React.Component
  //Put the return in a render
  render(){
    return (
      <div className="App">
        <p>
          <br />
          <br />
          If you wish to add a new Driver to the database click here
          <Link to={"/addDriver/"} className="Btn_btn-primary"> Add a driver </Link>
        </p>
      </div>
    );
  }
  
}

export default Driver;