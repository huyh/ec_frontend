import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class NavBar extends React.Component {

  render() {
    const store = this.props.store;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">My TV Shows</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Watch List ({store.watchlistCount})</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Favourites ({store.favoriteCount})</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
