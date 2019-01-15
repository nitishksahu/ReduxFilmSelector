import React, { Component } from 'react';
import { connect } from 'react-redux';

class FilmDetail extends Component {
  render () {
    if(!this.props.film) {
      return <div> Select a movie to get started </div>
    }
    return (
      <div>
        <h4> Details For : <div> <b>{this.props.film.title}</b> </div> </h4>
        <hr />

        <div> Actor: {this.props.film.actor} </div>
        <div> Rating: {this.props.film.rating} </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    film: state.activeFilm
  };
}

export default connect(mapStateToProps)(FilmDetail);
