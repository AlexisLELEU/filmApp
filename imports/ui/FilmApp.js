import React, { Component } from 'react';

import Movie from './Movie.js';

export default class FilmApp extends Component {
 getMovies(){
    return [
        { _id: 1, title: 'Titanic' },
        { _id: 2, title: 'Interstellar' },
        { _id: 3, title: 'Reservoir Dogs' },
      ];
 }

 renderMovies(){
    return this.getMovies().map((movie) => (
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