import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12
}

class SearchBox extends Component {
  render() {
    return(
      <div class="search_box">
        <h1>Search for reviews of Terminator</h1>
        <TextField placeholder="Enter movie name"
                  onChange={(e) => this.props.setSearchTerm(e.target.value)}/>
        <RaisedButton label="Search" style={style}/>
      </div>
    )
  }
}

export default SearchBox;