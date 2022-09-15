import React, { Component } from "react";
import { ThemeContext } from "./WebDevSimplified";

// This class doesn't have any constructor.
export default class ClassContextComponent extends Component() {
  // A method that returns an object that hold values that is used to style the component.
  themeStyles(dark) {
    return {
      backgroundColor: dark ? "#333" : "#CCC",
      color: dark ? "#CCC" : "#333",
      padding: "2rem",
      margin: "2rem",
    };
  }

  render() {
    return (
      // Inside the ThemeContext.Consumer component the values in The ThemeContext.Provider are available.

      <ThemeContext.Consumer>
        {(darkTheme) => {
          return <div style={this.themeStyles(darkTheme)}>Class Theme</div>;
        }}
      </ThemeContext.Consumer>
    );
  }
}
