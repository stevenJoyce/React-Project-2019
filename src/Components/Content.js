import React from 'react';
import Logo from '../images/f1Logo.jpg';
import Farina from '../images/Farina.jpg';
class Content extends React.Component {
  //To turn function to class add class name and extend app to include React.Component
  //Put the return in a render
  render(){
    return (
      <div className="App">
        <p>
          <img src = {Logo} alt="logo"/>
        </p>
        <h1> F1 History</h1>
        <p>
          Formula One began in 1950. The first offical Race was in May 1950 and it was held at Silverstone <br />
          In its first season ony 7 0f the 20 races were offical and counted towards the Championship. <br />
          The first F1 teams to compete in the championship were; <br />
          Alfa Romeo, Ferrari, Talbot-Lago, Kurtis Kraft Offenhauser,<br />
          Masserati, Deidt Offenhauser, Masserati Milano, Simca Gordini <br />
          The 1st Championship did not have a Constructors Championship only a Drivers Championship <br />
          <img src = {Farina} alt="farina"/><br />
          The 1st Drivers Championship was won by Giuseppe Farina.
          
        </p>
      </div>
    );
  }
  
}

export default Content;