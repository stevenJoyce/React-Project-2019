import React from 'react';
import TeamItems from './TeamItems';

class TeamData extends React.Component {
  //To turn function to class add class name and extend app to include React.Component
  //Put the return in a render
  render(){
    //This goes and pulls all data from the team JSON and execute it in this component
    return this.props.myTeams.map((team)=>{
        console.log(team);
        return <TeamItems key={team._id} team={team}></TeamItems>
    });
  }
  
}
export default TeamData;