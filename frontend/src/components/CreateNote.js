import React, { Component } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default class CreateNote extends Component {
    state = {
        users: [],
        userSelected: '',
        title: '',
        content: '',
        date: new Date()
    }

    async componentDidMount(){
        const response = await axios.get('http://localhost:4000/api/users');
        this.setState({users: response.data.map(user => user.username)});
    }

    onSubmit = (e) => {
        e.preventDefault();
    }

    onInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onChangeDate = (date) => {
        this.setState({date})
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Create note</h4>
                    <div className="form-group">
                        <select className="form-control" name="userSelected" onChange={this.onInputChange}>
                            {
                                this.state.users.map(user => (
                                    <option key={user} value={user}>
                                        {user}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="text" onChange={this.onInputChange} className="form-control" placeholder="Title" name="title" required/>
                    </div>
                    <div className="form-group">
                            <textarea name="content" onChange={this.onInputChange} className="form-control" placeholder="Content" required></textarea>
                    </div>
                    <div className="form-group">
                        <DatePicker className="form-control" selected={this.state.date} onChange={this.onChangeDate}/>
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <button type="submit" className="btn btn-primary">
                            Save
                        </button>
                    </form>
                </div>

            </div>
        )
    }
}
