import React from 'react';

class AddTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '',
                  firstSeason: '',
                  lastSeason: '',
                  f1Record:'',
                  logo:''};
    
    this.handleChangeTeamName = this.handleChangeTeamName.bind(this);
    this.handleChangeFirstSeason = this.handleChangeFirstSeason.bind(this);
    this.handleChangeLastSeason = this.handleChangeLastSeason.bind(this);
    this.handleChangeF1Record = this.handleChangeF1Record.bind(this);
    this.handleChangeLogo = this.handleChangeLogo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChangeTeamName(e){
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
  handleChangeLogo(e){
    this.setState({logo: e.target.value});
  }

  handleSubmit(e) {
    alert("Team Name: " + this.state.name + "\nFirst Season: " + this.state.firstSeason + 
        "\nLast Season: " + this.state.lastSeason + "\nF1 Record: " + this.state.f1Record + 
        "\nTeam Logo URL: " + this.state.logo);
    console.log("Driver Name: " + this.state.name + "\nFirst Season: " + this.state.firstSeason + 
    "\nLast Season: " + this.state.lastSeason + "\nF1 Record: " + this.state.f1Record + 
    "\nTeam Logo URL: " + this.state.logo);
    e.preventDefault();
  }

  render() {
    return (
      
      <div>
        <h1> Add F1 Team Form </h1>
        <form onSubmit={this.handleSubmit}>
          <div className='name'>
          <label>
            Team Name: 
          </label>
            <input type="text" 
            value={this.state.name} 
            onChange={this.handleChangeTeamName} />
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
            F1 Record(Championships - Wins):
          </label>
            <input type="text" 
            value={this.state.f1Record} 
            onChange={this.handleChangeF1Record} />
          </div>
          <div className='Team Logo'>
          <label>
            Team Logo:
          </label> 
          <textarea
            rows='3'
            className='form-control'
            value={this.state.logo} 
            onChange={this.handleChangeLogo}>
            </textarea>      
          </div>
          <input type="submit" value="Add Team" />
        </form>
      </div>
    );
  }//render
  
}//class

export default AddTeam;