import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header id="header">
        <h4><a href="{() => window.location.reload()}">Home</a></h4>
      </header>
    );
  }
}