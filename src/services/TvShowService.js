export default class TvShowService {
  fetchTvShow(query, callback) {
    fetch(`http://localhost:3000/api/tv_shows?query=${query}`, {
      method: 'get'
    }).then(response => response.json())
      .then(jsonData => callback(jsonData))
      .catch(err => console.log(err));
  }
}
