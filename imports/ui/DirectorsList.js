import React, { Component } from 'react';

export default class DirectorsList extends Component {


    render(){
        return(
            <ul>
                {this.props.show}
            </ul>
        )
    }
}