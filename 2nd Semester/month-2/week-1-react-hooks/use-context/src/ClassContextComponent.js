import React, { Component } from "react";
import { ThemeContext } from "./WebDevSimplified";

// This class doesn't have any constructor.
class ClassContextComponent extends Component() {
    // A method that returns an object that hold values that is used to style the component.
    themeStyles(dark) {
        return {
            backgroundColor: dark ? "#333" : "#CCC",
            color: dark ? "#CCC" : "#333",
            padding: "2rem",
            margin: "2rem"
        }
    }

    render() {
        return (
            // The consumer function of the themeCOntext is a function that we need to pass. That function has he value which is darkTheme. Whatever is returned fron this functio  is what is rendered.
            <ThemeContext.Consumer>
                {darkTheme => {
                    return <div style={this.themeStyles(darkTheme)}>Class Theme</div>
                }}
            </ThemeContext.Consumer>
        )
    }
}

export default ClassContextComponent;