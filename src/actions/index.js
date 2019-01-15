export function selectFilm(film) {
  return {
    type: 'FILM_SELECTED',
    payload: film
  }
}
