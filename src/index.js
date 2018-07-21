import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";

import TvShowList from "./components/TvShowList.jsx";
import TvShowListModel from "./models/TvShowListModel";
import TvShowModel from "./models/TvShowModel";

const store = new TvShowListModel();

render(
  <div>
    <DevTools />
    <TvShowList store={store} />
  </div>,
  document.getElementById("root")
);

//store.addTvShow("Get Coffee");
//store.addTvShow("Write simpler code");

setTimeout(() => {
  store.fetchTvShow('hello');
}, 2000);

window.store = store;
