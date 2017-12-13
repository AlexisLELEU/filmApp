import React, { Component } from 'react';

import Movie from './Movie.js';
import { Movies } from '../api/movies.js';
import Director from './Director.js';
import { Directors } from '../api/directors.js';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

class FilmApp extends Component {

 renderMovies(){
     //console.log(this.props.movie._id);
    return this.props.movie.map((movie) => (
        <Movie key={movie._id} id={movie._id} title={movie.title}/>

      ));
 }
renderDirectors(){
  return this.props.director.map((director) => (
      <Director key={director._id} id={director._id} name={director.name} />
    ));
}

handleSubmit = (event) => {
  event.preventDefault();
  console.log('bonjour');
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
       <form className="new-movie" onSubmit={this.handleSubmit} >
           <input type="text" id="newMovie" ref={(el) => this._newMovie = el} placeholder="titre du film"/>
           <input type="text" id="newDirector" ref={(el) => this._newDirector = el} placeholder="nom du réalisateur"/>
           <button type="submit">go</button>
       </form>
       <ul>
         {this.renderMovies()}
         {this.renderDirectors()}
       </ul>
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
