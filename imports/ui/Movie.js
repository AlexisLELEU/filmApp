import React, { Component } from 'react';
import { Movies } from '../api/movies.js';

export default class Movie extends Component {

    deleteThisMovie = () => {
        Movies.remove(this.props.id);
    }

    render() {
        return (
          <tr>
            <td className="movie-title">
                <span className="title">{this.props.title} (bd: movies)</span>
            </td>
            <td className="movie-director">
                <span>{(this.props.name) ? this.props.name : 'Non renseigné'}</span>
            </td>
            <td className="last-col">
                <button className="delete" onClick={this.deleteThisMovie}>
                    &times;
                </button>
            </td>
          </tr>
     );
 }
}
