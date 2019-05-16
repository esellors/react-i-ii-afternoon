import React, { Component } from 'react';
import Data from './Data';

export default class DisplayCard extends Component {
  constructor() {
    super();
    this.state = {
      dataFile: Data,
    }
  }
  displayInfo() {
    let data = this.state.dataFile;
    let index = this.props.index;
    return (
      <div id="displayInfo">
        <h2 id="pageNumber">{data[index].id}/{data.length}</h2>
        <h2>{data[index].name.first} {data[index].name.last}</h2>
        <h4>From: {data[index].city}, {data[index].country}</h4>
        <h4>Job Title: {data[index].title}</h4>
        <h4>Employer: {data[index].employer}</h4>
        <h4>Favorite Movies</h4>
        <ol>
          <li>{data[index].favoriteMovies[0]}</li>
          <li>{data[index].favoriteMovies[1]}</li>
          <li>{data[index].favoriteMovies[2]}</li>
        </ol>
      </div>
    )
  }
  render() {
    return (
      <section id="displayCard">
       
          {this.displayInfo()}
  
      </section>
    );
  }
}