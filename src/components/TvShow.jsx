import React, { Component } from "react";
import { observer } from "mobx-react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

@observer
class TvShow extends React.Component {
  constructor(props) {
    super(props);

    this.toggleWatchlist = this.toggleWatchlist.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  toggleWatchlist() {
    this.props.tvShow.watchlist = !this.props.tvShow.watchlist;
  }

  toggleFavorite() {
    this.props.tvShow.favorite = !this.props.tvShow.favorite;
  }

  render() {
    const tvShow = this.props.tvShow;

    return (
      <div className="row mt-3">
        <div className="col-sm">
          {tvShow.name}
        </div>
        <div className="col-sm">
          {tvShow.first_air_date.split('-')[0]}
        </div>
        <div className="col-sm">
          {Math.round(tvShow.vote_average * 10)}%
        </div>
        <div className="col-sm">
          {tvShow.original_language}
        </div>
        <div className="col-sm">
          {tvShow.watchlist ? (
            <FontAwesomeIcon icon="trash-alt" onClick={this.toggleWatchlist} />
          ) : (
            <FontAwesomeIcon icon="plus" onClick={this.toggleWatchlist} />
          )}
        </div>
        <div className="col-sm">
          {tvShow.favorite ? (
            <FontAwesomeIcon icon={['far', 'thumbs-up']} onClick={this.toggleFavorite} />
          ) : (
            <FontAwesomeIcon icon={['far', 'thumbs-down']} onClick={this.toggleFavorite} />
          )}
        </div>
      </div>
    )
  }
}

export default TvShow;
