import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import DisplayCard from './components/DisplayCard';
import PrevNext from './components/PrevNext';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      index: 0
    }
    this.pageNavCallback = this.pageNavCallback.bind(this);
  }
  pageNavCallback(val) {
    this.setState({index: val});
  }
  render() {
    return (
      <div>
        <Header />
        <DisplayCard index={this.state.index} />
        <PrevNext pageNavCallback={this.pageNavCallback}/>
      </div>
    );
  }
}
