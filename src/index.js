import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-regular-svg-icons';

library.add(faPlus, faThumbsDown, faThumbsUp, faTrashAlt);

import React from "react";
import { render } from "react-dom";

import NavBar from "./components/NavBar";
import TvShowList from "./components/TvShowList";
import TvShowListModel from "./models/TvShowListModel";

const store = new TvShowListModel();

render(
  <div>
    <NavBar store={store} />
    <TvShowList store={store} />
  </div>,
  document.getElementById("root")
);

window.store = store;
