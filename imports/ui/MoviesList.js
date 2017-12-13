import React, { Component } from 'react';

export default class MoviesList extends Component {
    render(){
        return(
            <table className="movies-list">
                <thead>
                    <tr>
                        <th>Titre du film</th>
                        <th>Réalisateur</th>
                        <th className="last-col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.show}
                </tbody>
            </table>    
        )
    }
}