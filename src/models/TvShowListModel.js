import { observable, computed, action } from "mobx";

import TvShowModel from "./TvShowModel";

export default class TvShowListModel {
  @observable tvShows = [];

  @action
  fetchTvShow(query) {
    fetch(`http://localhost:3000/api/tv_shows?query=${query}`, {
      method: 'get'
    }).then(response => response.json())
      .then(jsonData => this.tvShows = jsonData)
      .catch(err => console.log(err));
  }
}
