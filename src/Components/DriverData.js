import React from 'react';
import DriverItems from './DriverItems';

class DriverData extends React.Component {
  //To turn function to class add class name and extend app to include React.Component
  //Put the return in a render
  render(){
    //This goes and pulls all data from the mtMovies JSON and execute it in this component
    //The map function splits the array into 4 parts(4 movies) and outputs it
    return this.props.myDrivers.map((driver)=>{
      console.log(driver);
      return <DriverItems key={driver._id} driver={driver}></DriverItems> 
    });
}

}
export default DriverData;