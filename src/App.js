import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import{ Switch, Route, BrowserRouter } from 'react-router-dom';
import Content from './Components/Content';
import Driver from './Components/Driver';
import Team from './Components/Teams';
import TeamRecord from './Components/TeamChampionship';
import DriverRecord from './Components/DriverChampionship';
import AddDriver from './Components/AddDriver';
import AddTeam from './Components/AddTeam';

class App extends React.Component {
  
  //To turn function to class add class name and extend app to include React.Component
  //Put the return in a render
  render(){
    return (
      <BrowserRouter> 
        <div className="App">
          <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Driver">Driver</Nav.Link>
              <Nav.Link href="/Team">Team</Nav.Link>
              <Nav.Link href="/DriverChampionship">Driver Records</Nav.Link>
              <Nav.Link href="/TeamChampionship">Team Records</Nav.Link>
            </Nav>
            
          </Navbar>
            <Switch>
              <Route exact path="/" component={Content}/>
              <Route path="/Driver" component={Driver}/>
              <Route path="/Team" component={Team}/>
              <Route path="/DriverChampionship" component={DriverRecord}/>
              <Route path="/TeamChampionship" component={TeamRecord}/>
              <Route path="/AddTeam" component={AddTeam}/>
              <Route path="/AddDriver" component={AddDriver}/>
            </Switch>
        </div>
    </BrowserRouter>
    );
  }
  
}

export default App;
