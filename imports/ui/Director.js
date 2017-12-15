import React, { Component } from 'react';
import { Directors } from '../api/directors.js';
import { Session } from 'meteor/session'

export default class Director extends Component {

  

  deleteThisDirector = () => {
      Directors.remove(this.props.id);
  };



  filterMovie = () => {
      console.log(this.props.name);
      Session.set('name',  {'name': this.props.name});

  };

  render() {
   return (
     <li className='director' >
         <button className="delete" onClick={this.deleteThisDirector}>
             &times;
         </button>

         <a href="#" onClick={this.filterMovie} className="name">{this.props.name} (bd: directors)</a>
     </li>
   );
  }
}
