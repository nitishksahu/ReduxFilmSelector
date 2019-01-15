import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectFilm } from '../actions/index';
import { bindActionCreators } from 'redux';

class FilmList extends Component {
  renderList() {
    return this.props.films.map(film => {
      return (
        <li
        key = {film.title}
        onClick = {() => this.props.selectFilm(film)}
        className = "list-group-item">
        {film.title}
        </li>
      )
    })
  }
  render() {
    return(
      <ul className = "list-group col-sm-4">
      {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps (state) {
  return {
    films: state.films
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( {selectFilm :selectFilm }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmList);
