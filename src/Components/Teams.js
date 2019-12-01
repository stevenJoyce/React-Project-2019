import React from 'react';
import Team from './TeamData';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Teams extends React.Component {
  constructor() {
    super();
    this.ReloadDataMethod = this.ReloadDataMethod.bind(this);
  }
  state = {
    team: []
  };

  componentDidMount() {
    axios.get('http://localhost:4000/api/team')
      .then((response) => {
        this.setState({ team: response.data.team });
      })
      .catch((error) => {
        console.log(error);
      })

  }
  ReloadDataMethod() {
    axios.get('http://localhost:4000/api/team')
      .then((response) => {
        this.setState({ team: response.data.team })
      })
      .catch((error) => {
        console.log(error);
      });
  }
    //This will output the teams onto the team page
  //There is a link at the end of the page to add a new driver
  render() {
    return (
      <div className="App">
        <p>
          <Team myTeams={this.state.team} ReloadDataMethod={this.ReloadDataMethod}></Team>
        </p>
        <p>
          <Link to={"/AddTeam"} className="btn btn-primary"> Add Teams </Link>
        </p>
      </div>
    );
  }
}

export default Teams;

