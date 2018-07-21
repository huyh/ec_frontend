import { observable, computed, action } from "mobx";

import TvShowModel from "./TvShowModel";

export default class TvShowListModel {
  @observable tvShows = [];

  @action
  addTvShow(name) {
    this.tvShows.push(new TvShowModel(name));
  }
}
