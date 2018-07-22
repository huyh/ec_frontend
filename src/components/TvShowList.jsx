import React, { Component } from "react";
import { observer } from "mobx-react";
import { DebounceInput } from 'react-debounce-input';

import TvShow from "./TvShow";

@observer
class TvShowList extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const searchTerm = event.target.value;
    store.fetchTvShow(searchTerm);
  }

  render() {
    const tvShows = this.props.store.tvShows;

    return (
      <div>
        <div className="container">
          <form className="form-inline justify-content-end mt-3">
            <DebounceInput className="form-control mb-2 mr-sm-2" placeholder="enter a search term"
              debounceTimeout={300}
              onChange={this.handleChange} />
          </form>
          {tvShows.map(tvShow => (
            <TvShow tvShow={tvShow} key={tvShow.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default TvShowList;
