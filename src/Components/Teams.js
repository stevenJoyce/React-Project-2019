import React from 'react';
import Team from './TeamData';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Teams extends React.Component {
  state={
    team:[ ]
  };

  componentDidMount() {
    axios.get('http://localhost:4000/api/team')
    .then((response)=>{
      this.setState({team:response.data.team});
    })
    .catch((error)=>{
      console.log(error);
    })
  
  }

  //To turn function to class add class name and extend app to include React.Component
  render(){
    return (
      <div className="App">
        <p>
          <Team myTeams={this.state.team}></Team>
        </p>
        <p>
          <Link to={"/AddTeam"} className="Btn_btn-primary"> Add Teams </Link>
        </p>
      </div>
    );
  }
}

export default Teams;
  
