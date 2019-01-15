import React, { Component } from 'react';
import FilmList from '../containers/film-list';
import FilmDetail from '../containers/film-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <FilmList/>
        <FilmDetail />
      </div>
    );
  }
}
