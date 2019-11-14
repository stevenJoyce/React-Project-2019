import React from 'react';

class AddDriver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '',
                  firstSeason: '',
                  lastSeason: '',
                  f1Record:'',
                  portrait:''};
    
    this.handleChangeDriverName = this.handleChangeDriverName.bind(this);
    this.handleChangeFirstSeason = this.handleChangeFirstSeason.bind(this);
    this.handleChangeLastSeason = this.handleChangeLastSeason.bind(this);
    this.handleChangeF1Record = this.handleChangeF1Record.bind(this);
    this.handleChangePortrait = this.handleChangePortrait.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChangeDriverName(e){
      this.setState({name: e.target.value});
  }
  handleChangeFirstSeason(e) {
    this.setState({firstSeason: e.target.value});
  }
  handleChangeLastSeason(e) {
    this.setState({lastSeason: e.target.value});
  }
  handleChangeF1Record(e){
    this.setState({f1Record: e.target.value});
  }
  handleChangePortrait(e){
    this.setState({portrait: e.target.value});
  }

  handleSubmit(e) {
    alert("Driver Name: " + this.state.name + "\nFirst Season: " + this.state.firstSeason + 
        "\nLast Season: " + this.state.lastSeason + "\nF1 Record: " + this.state.f1Record + 
        "\nPortrait URL: " + this.state.poster);
    console.log("Driver Name: " + this.state.name + "\nFirst Season: " + this.state.firstSeason + 
    "\nLast Season: " + this.state.lastSeason + "\nF1 Record: " + this.state.f1Record + 
    "\nPortrait URL: " + this.state.poster);
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h3> Hello from the Create component</h3>
      
      <form onSubmit={this.handleSubmit}>
        <div className='name'>
        <label>
          Driver Name: 
        </label>
          <input type="text" 
          value={this.state.name} 
          onChange={this.handleChangeDriverName} />
        </div>
        <div className='first season'>
        <label>
          First Season:
        </label>
          <input type="text" 
          value={this.state.firstSeason} 
          onChange={this.handleChangeFirstSeason} />
        </div>
        <div className='last season'>
        <label>
          Last Season:
        </label>
          <input type="text" 
          value={this.state.lastSeason} 
          onChange={this.handleChangeLastSeason} />
        </div>
        <div className='f1 record'>
        <label>
          F1 Record(Races - Wins):
        </label>
          <input type="text" 
          value={this.state.f1Record} 
          onChange={this.handleChangeF1Record} />
        </div>
        <div className='portrait URL'>
        <label>
          Portrait URL:
         </label> 
         <textarea
          rows='3'
          className='form-control'
          value={this.state.portrait} 
          onChange={this.handleChangePotrait} />
        </div>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
  
}

export default AddDriver;