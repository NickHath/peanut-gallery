import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';

// components
import SearchBox from './components/SearchBox'

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ""
    }
    this.setSearchTerm = this.setSearchTerm.bind(this);
  }

  setSearchTerm(searchTerm) {
    this.setState({searchTerm: searchTerm});
  }

  render() {
    console.log(this.state);
    return (
      <MuiThemeProvider>
        <div className="app">
          <SearchBox setSearchTerm={this.setSearchTerm}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
