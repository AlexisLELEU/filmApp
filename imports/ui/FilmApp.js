import React, { Component } from 'react';

import Movie from './Movie.js';
import { Movies } from '../api/movies.js';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

class FilmApp extends Component {

 renderMovies(){
    return this.props.movie.map((movie) => (
        <Movie key={movie.id} title={movie.title} />
      ));
 }


    handleSubmit(event) {
        event.preventDefault();

        const title = ReactDOM.findDOMNode(this.refs.newMovie).value.trim();
        Movies.insert({
            title
        });

        // Clear form
        ReactDOM.findDOMNode(this.refs.newMovie).value = '';
    }



 render() {
   return (
     <div className="main-container">
       <header>
         <h1>Movies List</h1>
       </header>
         <form className="new-movie" onSubmit={this.handleSubmit.bind(this)} >
             <input type="text" ref="newMovie" placeholder="titre du film"
             />
         </form>
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