import { observable, computed, action } from "mobx";

import TvShowModel from "./TvShowModel";
import TvShowService from "../services/TvShowService";

export default class TvShowListModel {
  @observable tvShows = [];

  constructor() {
    this.tvShowService = new TvShowService();
  }

  @computed
  get watchlistCount() {
    return this.tvShows.filter(tvShow => tvShow.watchlist).length;
  }

  @computed
  get favoriteCount() {
    return this.tvShows.filter(tvShow => tvShow.favorite).length;
  }

  @action
  fetchTvShow(query) {
    this.tvShowService.fetchTvShow(query, (jsonData) => this.tvShows = jsonData);
  }
}
