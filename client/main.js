import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { render } from 'react-dom';

import './main.html';
import FilmApp from '../imports/ui/FilmApp.js';

Template.hello.onCreated(function helloOnCreated() {

});

Template.hello.helpers({

});

Template.hello.events({

});

Meteor.startup(() => {
    render(<FilmApp />, document.getElementById('app'));
});