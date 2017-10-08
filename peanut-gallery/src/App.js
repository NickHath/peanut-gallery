import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

// components
import SearchBox from './components/SearchBox'
import DownloadLinks from './components/DownloadLinks'
import ProgressBar from './components/ProgressBar'

// stretch goal components
// import ResultsFeed from './components/ResultsFeed'


// https://material.io/guidelines/components/cards.html#cards-content
// USE CARDS IN A FEED FOR THE RESULTS COMPONENT

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      reviewsTxt: "",
      reviewsHtml: "",
      receivedResults: false, // for conditional rendering of search box / download links 
      progress: 0.0
    }
    this.setSearchTerm = this.setSearchTerm.bind(this);
    this.setReviews = this.setReviews.bind(this);
  }

  setSearchTerm(searchTerm) {
    this.setState({searchTerm: searchTerm});
  }

  // doesnt work when omdb gives a title with an empty imdb page
  // http://www.imdb.com/title/tt1994570/reviews -- Terminator results in just the ads from
  // this page!!!
  // had to search The Terminator.. these are shell sites
  setReviews() {
    axios.get(`http://localhost:4200/api/reviews/?title=${this.state.searchTerm}`)
         // just ads?
         .then((res) => this.setState({reviewsTxt: res.data.reviewsTXT, 
                                       reviewsHtml: res.data.reviewsHTML,
                                       receivedResults: true
        }))
  }

  render() {
    console.log(this.state);
    return (
      <MuiThemeProvider>
        <div className="app">
          {
            this.state.receivedResults ?
              <DownloadLinks reviewsTxt={this.state.reviewsTxt} reviewsHtml={this.state.reviewsHtml} movieTitle={this.state.searchTerm}/> :
              <SearchBox setSearchTerm={this.setSearchTerm} setReviews={this.setReviews}/>
          } 
          {/* <ProgressBar /> */}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
