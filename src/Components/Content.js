import React from 'react';

class Content extends React.Component {
  //To turn function to class add class name and extend app to include React.Component
  //Put the return in a render
  render(){
    return (
      <div className="App">
        <h1> Hello World! from Content </h1>
        <h2> It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
  }
  
}

export default Content;