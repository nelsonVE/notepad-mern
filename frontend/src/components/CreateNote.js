import React, { Component } from 'react'
import axios from 'axios'

export default class CreateNote extends Component {
    state = {
        notes: []
    }

    async componentDidMount(){
        const response = await axios.get('http://localhost:4000/api/notes');
        this.setState({notes: response.data});
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    user
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.notes.map(note => (
                                <li className="list-group-item list-group-item-action" key={note._id}>
                                    {note.title}
                                </li>)
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
