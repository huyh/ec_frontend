import React, { Component } from "react";
import { observer } from "mobx-react";

const TvShow = observer(({ tvShow }) => (
  <li>
    {tvShow.name}
  </li>
));

export default TvShow;
