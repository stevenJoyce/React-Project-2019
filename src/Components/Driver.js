import React from 'react';

class Driver extends React.Component {
  //To turn function to class add class name and extend app to include React.Component
  //Put the return in a render
  render(){
    return (
      <div className="App">
        <h1> My Driver in another component</h1>
      </div>
    );
  }
  
}

export default Driver;