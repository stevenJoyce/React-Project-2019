import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class TeamItem extends React.Component {
    constructor() {
        super();
        this.DeleteTeam = this.DeleteTeam.bind(this);
    }

    DeleteTeam(e) {
        console.log("Delete Clicked");
        axios.delete("http://localhost:4000/api/team/" + this.props.team._id)
            .then(() => {
                this.props.ReloadDataMethod();
            })
            .catch();

    }
    render() {
        return (
            <div>
                <Card bg="dark" text="white">
                    <Card.Header>{this.props.team.teamName}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.team.teamLogo} alt="poster" height="200" width="300"></img>
                            <p>
                                First Season they competed in F1 was  {this.props.team.teamFirstSeason} <br />
                                Last Season they competed in F1 was {this.props.team.teamLastSeason} <br />
                                F1 Record: {this.props.team.teamF1Record}
                            </p>
                        </blockquote>
                    </Card.Body>
                    <Link to={"/EditTeam/" + this.props.team._id} className="Btn_btn-primary"> Edit </Link>
                    <Button variant="danger" onClick={this.DeleteTeam}>Delete</Button>
                </Card>
            </div>
        );
    }
}

export default TeamItem;