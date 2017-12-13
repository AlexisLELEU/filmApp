import React, { Component } from 'react';

import Movie from './Movie.js';
import { Movies } from '../api/movies.js';
import { withTracker } from 'meteor/react-meteor-data';

class FilmApp extends Component {

 renderMovies(){
    return this.props.movie.map((movie) => (
        <Movie key={movie.id} title={movie.title} />
      ));
 }

 render() {
   return (
     <div>
       <header>
         <h1>Movies List</h1>
       </header>

       <ul>
         {this.renderMovies()}
       </ul>
     </div>
   );
 }
}

export default withTracker(() => {
    return {
        movie: Movies.find({}).fetch(), // recupère les données de la collection
    };
})(FilmApp); // exporte la class Filmapp