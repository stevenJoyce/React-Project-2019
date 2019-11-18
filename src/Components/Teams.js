import React from 'react';
import {Link} from 'react-router-dom';

class Team extends React.Component {
  //To turn function to class add class name and extend app to include React.Component
  //Put the return in a render
  render(){
    return (
      <div className="App">
        <p>
          <br />
          <br />
          If you wish to add a new Driver to the database click here
          <Link to={"/addTeam/"} className="Btn_btn-primary"> Add a Team </Link>
        </p>
      </div>
    );
  }
  
}

export default Team;