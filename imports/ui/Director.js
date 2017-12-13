import React, { Component } from 'react';
import { Directors } from '../api/directors.js';

export default class Director extends Component {

  deleteThisDirector = () => {
      Directors.remove(this.props.id);
  }

  render() {
   return (
     <td className='director'>
         <button className="delete" onClick={this.deleteThisDirector}>
             &times;
         </button>

         <a href="#" className="name">{this.props.name} (bd: directors)</a>
     </td>
   );
  }
}
