import React from 'react';
import axios from 'axios';

class EditTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamName: '',
      teamFirstSeason: '',
      teamLastSeason: '',
      teamF1Record: '',
      teamLogo: '',
      _id: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeTeamName = this.handleChangeTeamName.bind(this);
    this.handleChangeFirstSeason = this.handleChangeFirstSeason.bind(this);
    this.handleChangeLastSeason = this.handleChangeLastSeason.bind(this);
    this.handleChangeF1Record = this.handleChangeF1Record.bind(this);
    this.handleChangeLogo = this.handleChangeLogo.bind(this);
    
  }
  componentDidMount() {
    alert(this.props.match.params.id);

    axios.get('http://localhost:4000/api/team/' + this.props.match.params.id)
      .then((response) => {
        this.setState({
          _id: response.data._id,
          teamName: response.data.teamName,
          teamFirstSeason: response.data.teamFirstSeason,
          teamLastSeason: response.data.teamLastSeason,
          teamF1Record: response.data.teamF1Record,
          teamLogo: response.data.teamLogo
        })
      })
      .catch();
  }
  handleChangeTeamName(e) {
    this.setState({ teamName: e.target.value });
  }
  handleChangeFirstSeason(e) {
    this.setState({ teamFirstSeason: e.target.value });
  }
  handleChangeLastSeason(e) {
    this.setState({ teamLastSeason: e.target.value });
  }
  handleChangeF1Record(e) {
    this.setState({ teamF1Record: e.target.value });
  }
  handleChangeLogo(e) {
    this.setState({ teamLogo: e.target.value });
  }

  handleSubmit(e) {
    alert("Team Name: " + this.state.teamName + "\nFirst Season: " + this.state.teamFirstSeason +
      "\nLast Season: " + this.state.teamLastSeason + "\nF1 Record: " + this.state.teamF1Record +
      "\nTeam Logo URL: " + this.state.teamLogo);

    console.log("Driver Name: " + this.state.teamName + "\nFirst Season: " + this.state.teamFirstSeason +
      "\nLast Season: " + this.state.teamLastSeason + "\nF1 Record: " + this.state.teamF1Record +
      "\nTeam Logo URL: " + this.state.teamLogo);
    e.preventDefault();

    const newTeam = {
      teamName: this.state.teamName,
      teamFirstSeason: this.state.teamFirstSeason,
      teamLastSeason: this.state.teamLastSeason,
      teamF1Record: this.state.teamF1Record,
      teamLogo: this.state.teamLogo
    }

    axios.put('http://localhost:4000/api/team/'+this.state._id, 
    newTeam)
    .then()
    .catch();

    this.setState({
      teamName: '',
      teamFirstSeason: '',
      teamLastSeason: '',
      teamF1Record: '',
      teanLogo: '' })
  }

  render() {
    return (
      <div>
        <h1> Update F1 Team </h1>
        <form onSubmit={this.handleSubmit}>
          <div className='name'>
            <label> Team Name: </label>
            <input type="text"
              value={this.state.teamName}
              onChange={this.handleChangeTeamName} />
          </div>
          <div className='first season'>
            <label> First Season: </label>
            <input type="text"
              value={this.state.teamFirstSeason}
              onChange={this.handleChangeFirstSeason} />
          </div>
          <div className='last season'>
            <label> Last Season: </label>
            <input type="text"
              value={this.state.teamLastSeason}
              onChange={this.handleChangeLastSeason} />
          </div>
          <div className='f1 record'>
            <label> F1 Record(Championships - Wins): </label>
            <input type="text"
              value={this.state.teamF1Record}
              onChange={this.handleChangeF1Record} />
          </div>
          <div className='Team Logo'>
            <label> Team Logo: </label>
            <textarea
              rows='3'
              className='form-control'
              value={this.state.teamLogo}
              onChange={this.handleChangeLogo}>
            </textarea>
          </div>
          <input type="submit" value="Update Team" />
        </form>
      </div>
    );
  }

}

export default EditTeam;