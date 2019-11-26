import React from 'react';
import Card from 'react-bootstrap/Card';

class DriverItem extends React.Component {
    render(){
        return(
            <Card bg ="dark" text = "white">
                <Card.Header>{this.props.driver.driverName}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src ={this.props.driver.driverPicture} alt="poster" height="300" width="300"></img>
                        <p> First Season he competed in F1 was  {this.props.driver.driverFirstSeason} <br /> 
                            Last Season he competed in F1 was {this.props.driver.driverLastSeason} <br />
                            F1 Record: {this.props.driver.driverF1Record}</p> 
                    </blockquote>
                </Card.Body>
            </Card>
        )
    }
}

export default DriverItem;