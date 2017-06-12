import {Players} from './../imports/api/players';
import {Meteor} from 'meteor/meteor';

Meteor.startup(function () {
  Players.insert({
    name: 'Morty',
    score: 34
  });
  console.log(Players.find().fetch());
});
