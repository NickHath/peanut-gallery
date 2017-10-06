import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12
}

class DownloadLink extends Component {
  render() {
    return(
      <div className='download_links'>
        <h1>
          Download all imdb reviews of Placeholder{this.props.movieTitle}:
        </h1>
        <RaisedButton label=".txt" style={style} />
        <RaisedButton label=".html" style={style} />
        <RaisedButton label=".json" style={style} />
      </div>
    )
  }
}

export default DownloadLink