import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

// components
import SearchBox from './components/SearchBox'
import ResultsFeed from './components/ResultsFeed'
import ProgressBar from './components/ProgressBar'

// https://material.io/guidelines/components/cards.html#cards-content
// USE CARDS IN A FEED FOR THE RESULTS COMPONENT

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      reviewsTxt: "",
      showProgress: true
    }
    this.setSearchTerm = this.setSearchTerm.bind(this);
    this.setReviewsTxt = this.setReviewsTxt.bind(this);
  }

  setSearchTerm(searchTerm) {
    this.setState({searchTerm: searchTerm});
  }

  setReviewsTxt() {
    axios.get(`http://localhost:4000/api/reviews/?title=${this.state.searchTerm}`)
         .then((res) => this.setState({reviewsTxt: res}))
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="app">
          <SearchBox setSearchTerm={this.setSearchTerm} setReviewsTxt={this.setReviewsTxt}/>
          <DownloadLinks />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
