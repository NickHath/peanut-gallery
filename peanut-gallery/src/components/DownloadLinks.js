import React, {Component} from 'react';

import DownloadLink from './DownloadLink'

class DownloadLinks extends Component {
  render() {
    return (
      <div>
        <DownloadLink display='.txt' movieTitle={this.props.movieTitle} reviewsTxt={this.props.reviewsTxt} reviewsHtml={this.props.reviewsHtml}/>
      </div>
    )
  }
}

export default DownloadLinks