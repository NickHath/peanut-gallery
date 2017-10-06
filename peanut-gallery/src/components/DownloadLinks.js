import React, {Component} from 'react';

import DownloadLink from './DownloadLink'

class DownloadLinks extends Component {
  render() {
    return (
      <div>
        <DownloadLink display='.txt' downloadContent={this.props.reviewsTxt} movieTitle={this.props.movieTitle}/>
      </div>
    )
  }
}

export default DownloadLinks