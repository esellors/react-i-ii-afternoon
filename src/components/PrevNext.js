import React, { Component } from 'react';
import Data from './Data';

export default class PrevNext extends Component {
  constructor() {
    super();
    this.state = {
      dataFileLastItem: Data.length - 1,
      index: 0
    }
  }
  idChooser(val, index) {
    if (val === 'prevCard') {
      if (index === 0) {
        index = this.state.dataFileLastItem;
      } else {   
        index -= 1;
      }    
    } else if (val === 'nextCard') {
      if (index === this.state.dataFileLastItem) {
        index = 0;
      } else {   
        index += 1;
      }
    }
    this.setState({index: index})
    this.props.pageNavCallback(index);
  }
  render() {
    return (
      <section id="navArea">
        <div>
          <button id="prevCard" onClick={(e) => this.idChooser(e.target.id, this.state.index)}>&lt; Previous</button>
          <button id="nextCard" onClick={(e) => this.idChooser(e.target.id, this.state.index)}>Next &gt;</button>
        </div>
      </section>
    );
  }
}