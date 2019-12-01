import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class DriverItem extends React.Component {
    constructor() {
        super();
        this.DeleteDriver = this.DeleteDriver.bind(this);
    }

    DeleteDriver(e) {
        console.log("Delete Clicked");
        axios.delete("http://localhost:4000/api/driver/" + this.props.driver._id)
            .then(() => {
                this.props.ReloadDataMethod();
            })
            .catch();
    }

    render() {
        return (
            <Card bg="dark" text="white">
                <Card.Header>{this.props.driver.driverName}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={this.props.driver.driverPicture} alt="poster" height="300" width="300"></img>
                        <p> First Season he competed in F1 was  {this.props.driver.driverFirstSeason} <br />
                            Last Season he competed in F1 was {this.props.driver.driverLastSeason} <br />
                            F1 Record: {this.props.driver.driverF1Record}</p>
                    </blockquote>
                </Card.Body>
                <Link to={"/EditDriver/" + this.props.driver._id} className="Btn btn-primary"> Edit </Link>
                <Button variant="danger" onClick={this.DeleteDriver}>Delete</Button>
            </Card>

        );
    }
}

export default DriverItem;