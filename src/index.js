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

store.addTvShow("Get Coffee");
store.addTvShow("Write simpler code");

window.store = store;
