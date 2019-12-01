import React from 'react';
import axios from 'axios';

class EditDriver extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            driverName: '',
            driverFirstSeason: '',
            driverLastSeason: '',
            driverF1Record: '',
            driverPicture: '',
            _id: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeDriverName = this.handleChangeDriverName.bind(this);
        this.handleChangeFirstSeason = this.handleChangeFirstSeason.bind(this);
        this.handleChangeLastSeason = this.handleChangeLastSeason.bind(this);
        this.handleChangeF1Record = this.handleChangeF1Record.bind(this);
        this.handleChangePicture = this.handleChangePicture.bind(this);

    }
    componentDidMount() {
        alert(this.props.match.params.id);

        axios.get('http://localhost:4000/api/driver/' + this.props.match.params.id)
            .then((response) => {
                this.setState({
                    _id: response.data._id,             
                    driverName: response.data.driverName,
                    driverFirstSeason: response.data.driverFirstSeason,
                    driverLastSeason: response.data.driverLastSeason,
                    driverF1Record: response.data.driverF1Record,
                    driverPicture: response.data.driverPicture
                })
            })
            .catch();
    }
    handleChangeDriverName(e) {
        this.setState({ driverName: e.target.value });
    }
    handleChangeFirstSeason(e) {
        this.setState({ driverFirstSeason: e.target.value });
    }
    handleChangeLastSeason(e) {
        this.setState({ driverLastSeason: e.target.value });
    }
    handleChangeF1Record(e) {
        this.setState({ driverF1Record: e.target.value });
    }
    handleChangePicture(e) {
        this.setState({ driverPicture: e.target.value });
    }
    
    handleSubmit(e) {
        alert("Driver Changed\n Driver Name: " + this.state.driverName + "\nFirst Season: " + this.state.driverFirstSeason +
            "\nLast Season: " + this.state.driverLastSeason + "\nF1 Record: " + this.state.driverF1Record +
            "\nPortrait URL: " + this.state.driverPicture);
        console.log("Driver Changed\n Driver Name: " + this.state.driverName + "\nFirst Season: " + this.state.driverFirstSeason +
        "\nLast Season: " + this.state.driverLastSeason + "\nF1 Record: " + this.state.driverF1Record +
        "\nPortrait URL: " + this.state.driverPicture);
        e.preventDefault();

        const newDriver = {
            driverName: this.state.driverName,
            driverFirstSeason: this.state.driverFirstSeason,
            driverLastSeason: this.state.driverLastSeason,
            driverF1Record: this.state.driverF1Record,
            driverPicture: this.state.driverPicture
        };

        axios.put("http://localhost:4000/api/driver/ " + this.state._id,
        newDriver)
        .then()
        .catch();

        this.setState({
            driverName: '',
            driverFirstSeason: '',
            driverLastSeason: '',
            driverF1Record: '',
            driverPicture: ''})
    }

    render() {
        return (
            <div>
                <h1> Update F1 Driver </h1>
                <form onSubmit={this.handleSubmit}>
                    <div className='name'>
                        <label> Driver Name: </label>
                        <input type="text"
                            value={this.state.driverName}
                            onChange={this.handleChangeDriverName} />
                    </div>
                    <div className='first season'>
                        <label> First Season: </label>
                        <input type="text"
                            value={this.state.driverFirstSeason}
                            onChange={this.handleChangeFirstSeason} />
                    </div>
                    <div className='last season'>
                        <label> Last Season: </label>
                        <input type="text"
                            value={this.state.driverLastSeason}
                            onChange={this.handleChangeLastSeason} />
                    </div>
                    <div className='f1 record'>
                        <label> F1 Record(Races - Wins): </label>
                        <input type="text"
                            value={this.state.driverF1Record}
                            onChange={this.handleChangeF1Record} />
                    </div>
                    <div className='portrait URL'>
                        <label>  Portrait URL: </label>
                        <textarea
                            rows='3'
                            className='form-control'
                            value={this.state.driverPicture}
                            onChange={this.handleChangePicture}
                        ></textarea>
                    </div>
                    <input type="submit" value="Update Driver" />
                </form>
            </div>
        );
    }
}
export default EditDriver;