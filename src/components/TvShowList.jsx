import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

import TvShow from "./TvShow";

@observer
class TvShowList extends React.Component {
  render() {
    const tvShows = this.props.store.tvShows;

    return (
      <div>
        <ul>
          {tvShows.map(tvShow => (
            <TvShow tvShow={tvShow} key={tvShow.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default TvShowList;
