import { combineReducers } from 'redux';
import FilmReducer from './reducer_films';
import ActiveFilm from './reducer_active_film';

const rootReducer = combineReducers({
  films: FilmReducer,
  activeFilm: ActiveFilm
});

export default rootReducer;
