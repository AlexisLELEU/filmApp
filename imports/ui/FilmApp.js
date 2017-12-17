import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session'

import Movie from './Movie.js';
import Director from './Director.js';
import Form from './Form.js';
import MoviesList from './MoviesList.js';
import DirectorsList from './DirectorsList.js';
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
      <Director key={director._id} id={director._id} name={director.name}/>
    ));
  }

  handleSubmit = (event) => {
    event.preventDefault();

    Movies.insert({
      title : this._newMovie.value,
      name : this._newDirector.value
    });
    this._newMovie.value = '';

    console.log(this._newDirector.value);
    Directors.insert({
      name : this._newDirector.value
    });
    this._newDirector.value = '';
  }

    showAll = () => {
        Session.set('name',  {});
    }

  render() {
    return (
      <div className="main-container">
        <header>
          <h1>Movies List</h1>
        </header>
        <div className="content">
          <Form 
            submit={this.handleSubmit} 
            refMovie={(el) => this._newMovie = el} 
            refDir={(el) => this._newDirector = el}/>

            <a href="#" onClick={this.showAll} className="name">Reset tags</a>

          <DirectorsList
            show={this.renderDirectors()}/>

          <MoviesList
            show={this.renderMovies()}/>
        </div>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
      movie: Movies.find(Session.get('name')).fetch(),
      director: Directors.find().fetch(), // recupère les données de la collection
  };
})(FilmApp); // exporte la class Filmapp
