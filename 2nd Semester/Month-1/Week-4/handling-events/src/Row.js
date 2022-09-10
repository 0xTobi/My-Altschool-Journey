import React, {Component} from "react";


// A child comp that creates a <li> element with values received from the parent comp.
export default class Row extends Component {
    render = () =>
        <li>{this.props.item}</li>
}
