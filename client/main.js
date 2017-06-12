import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';

Tracker.autorun(function () {
  console.log(Players.find().fetch());
});


/* We have 3 ways to load:
import 'relative path' // General files
import 'module' // Npm modules
import 'meteor/module' // Meteor specific modules
*/
const players = [{
    _id: '1',
    name: 'Rick',
    score: 99
  }, {
    _id: '2',
    name: 'Morty',
    score: -1
  }, {
    _id: '3',
    name: 'Birdperson',
    score: -12
  }];

const renderPlayers = function (playersList) {
  return playersList.map(function (player) {
    return <p key={player._id}>{player.name} has {player.score} point(s).</p>;
  });
};

Meteor.startup(function () {
  let title = 'Account Settings';
  let name = 'Rick';
  let jsx = (
  <div>
    <h1>{title}</h1>
    <p>Hello {name}!</p>
    <p>This is my second p</p>
    {renderPlayers(players)}
  </div>
);
  ReactDOM.render(
    jsx,
    document.getElementById('app')
  );
});
