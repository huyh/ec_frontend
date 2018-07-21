import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

import TvShow from "./TvShow";

@observer
class TvShowList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.store.tvShows.map(tvShow => (
            <TvShow tvShow={tvShow} key={tvShow.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default TvShowList;
