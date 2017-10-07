import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';

const style = {
  margin: 12
}

// change to react-type !!! https://www.npmjs.com/package/react-type

class SearchBox extends Component {
  constructor() {
    super();

    this.state = {
      sampleMovies: [{ name: 'RoboCop', style: {color: '#f44336' }}, { name: 'Westside Story', style: {color: '#3f51b5' }}, { name: 'Moonrise Kingdom', style: {color: '#ffc107' }}, { name: 'Aliens', style: {color: '#ff5722' }}, { name: 'Jaws', style: {color: '#2196f3' }}, { name: 'Annie Hall', style: {color: '#607d8b' }}, { name: 'The Godfather', style: {color: '#009688' }}, { name: 'Titanic', style: {color: '#9c27b0' }}, { name: 'Beauty and the Beast', style: {color: '#757575' }}, { name: 'Gone In 60 Seconds', style: {color: '#795548' }}, { name: 'Saving Private Ryan', style: {color: '#e91e63' }}, { name: 'Shawshank Redemption', style: {color: '#f44336' }}, { name: 'Austin Powers', style: {color: '#2196f3' }}]
    }
  }

  render() {
    return(
      <div className="search_box">
        <h1>Search for reviews of 
          <TypistLoop interval={800}>
          {this.state.sampleMovies.map(movie => <Typist key={movie.name} avgTypingDelay={110}><span style={movie.style}>{movie.name}</span></Typist>)}
          </TypistLoop>
        </h1>
        <TextField placeholder="Enter movie name"
                  onChange={(e) => this.props.setSearchTerm(e.target.value)}/>
        <RaisedButton label="Search" style={style}
                      onClick={() => this.props.setReviewsTxt()}/>
      </div>

    )
  }
}

export default SearchBox;