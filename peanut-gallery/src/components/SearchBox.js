import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Typist from 'react-typist';

const style = {
  margin: 12
}

// change to react-type !!! https://www.npmjs.com/package/react-type

class SearchBox extends Component {
  constructor() {
    super();
    this.state = {
      movieTitle: "",
    }
  }

  render() {
    return(
      <div className="search_box">
        <h1>Search for reviews of <Typist avgTypingDelay={110}>Terminator</Typist></h1>
        <TextField placeholder="Enter movie name"
                  onChange={(e) => this.props.setSearchTerm(e.target.value)}/>
        <RaisedButton label="Search" style={style}
                      onClick={this.props.setReviewsTxt}/>
      </div>
    )
  }
}

export default SearchBox;