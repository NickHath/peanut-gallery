import React, {Component} from 'react';

import DownloadLink from './DownloadLink'

class DownloadLinks extends Component {
  render() {
    return (
      <div>
        <DownloadLink display='.txt' movieTitle={this.props.movieTitle} reviewsTxt={this.props.reviewsTxt}/>
      </div>
    )
  }
}

export default DownloadLinks