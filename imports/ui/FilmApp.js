import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

import Movie from './Movie.js';
import Director from './Director.js';
import { Movies } from '../api/movies.js';
import { Directors } from '../api/directors.js';

class FilmApp extends Component {
  renderMovies(){
      //console.log(this.props.movie._id);
    return this.props.movie.map((movie) => (
        <Movie key={movie._id} id={movie._id} title={movie.title} name={movie.name}/>
      ));
  }

  renderDirectors(){
  return this.props.director.map((director) => (
      <Director key={director._id} id={director._id} name={director.name} />
    ));
  }

  handleSubmit = (event) => {
    event.preventDefault();

    Movies.insert({
      title : this._newMovie.value,
      name : this._newDirector.value
    });
    this._newMovie.value = '';

    Directors.insert({
      name : this._newDirector.value
    });
    this._newDirector.value = '';
  }

  render() {
  return (
    <div className="main-container">
      <header>
        <h1>Movies List</h1>
      </header>
      <div>
        <form className="new-movie" onSubmit={this.handleSubmit}>
            <input type="text" id="newMovie" ref={(el) => this._newMovie = el} placeholder="titre du film"/>
            <input type="text" id="newDirector" ref={(el) => this._newDirector = el} placeholder="nom du réalisateur"/>
            <button type="submit">Ajouter</button>
        </form>
        <table className="movies-list">
          <thead>
            <td>Titre du film</td>
            <td>Réalisateur</td>
            <td class="last-col">Actions</td>
          </thead>
          <tbody>
            {this.renderMovies()}
          </tbody>
        </table>
      </div>
    </div>
    );
  }
}

export default withTracker(() => {
return {
    movie: Movies.find().fetch(),
    director: Directors.find().fetch(), // recupère les données de la collection
};

})(FilmApp); // exporte la class Filmapp
