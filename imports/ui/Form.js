import React, { Component } from 'react';

export default class Form extends Component {
    render() {
        return(
            <form className="new-movie" onSubmit={this.props.submit}>
                <input type="text" id="newMovie" ref={this.props.refMovie} placeholder="titre du film"/>
                <input type="text" id="newDirector" ref={this.props.refDir} placeholder="nom du réalisateur"/>
                <button type="submit">Ajouter</button>
            </form>
        )
    }
}