import React, { Component } from 'react';
import { Movies } from '../api/movies.js';

export default class Movie extends Component {

    deleteThisMovie = () => {
        Movies.remove(this.props.id);
    }


    render() {
        console.log(this.props)
        return (
            <li className='movie'>
                <button className="delete" onClick={this.deleteThisMovie}>
                    &times;
                </button>

                <span className="title">{this.props.title}</span>
            </li>
     );
 }
}