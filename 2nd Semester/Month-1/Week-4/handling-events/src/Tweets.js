import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [
        {
          created_at: "Wed Oct 10 20:19:24 +0000 2018",
          id: 1050118621198921728,
          id_str: "1050118621198921728",
          text: "To make room for more expression, we will now count all emojis as equal—including those with gender‍‍‍ ‍‍and skin t… https://t.co/MkGjXf9aXm",
          user: {},
          entities: {},
        },
      ],
    };
  }
}
