import React, {Component} from 'react';

class DownloadLink extends Component {
  render() {
    return(
      <button>{this.props.display}</button>
    )
  }
}

export default DownloadLink