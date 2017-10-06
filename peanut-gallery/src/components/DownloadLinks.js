import React, {Component} from 'react';

import DownloadLink from './DownloadLink'

class DownloadLinks extends Component {
  render() {
    return (
      <div>
        <DownloadLink display='.txt' downloadContent={this.props.reviewsTxt}/>
        <div>TEST CONTENT</div>
        <div>{this.props.downloadContent}</div>
      </div>
    )
  }
}

export default DownloadLinks