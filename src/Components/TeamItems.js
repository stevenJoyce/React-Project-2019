import React from 'react';
import Card from 'react-bootstrap/Card';
class TeamItem extends React.Component {

    render(){
        return(
            <Card bg ="dark" text = "white">
                <Card.Header>{this.props.team.teamName}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src ={this.props.team.teamLogo} alt="poster" height="200" width="300"></img>
                        <p> First Season they competed in F1 was  {this.props.team.teamFirstSeason} <br /> 
                            Last Season they competed in F1 was {this.props.team.teamLastSeason} <br />
                            F1 Record: {this.props.team.teamF1Record}
                        </p>   
                    </blockquote>
                </Card.Body>
            </Card>
        );
    }
}

export default TeamItem;