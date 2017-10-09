import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  'marginRight': 12 ,
  'marginLeft': 6
}

const imdbColor = {
  color: '#f5de50'
}

class DownloadLink extends Component {
  // https://stackoverflow.com/questions/2897619/using-html5-javascript-to-generate-and-save-a-file
  download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}

  render() {
    return(
      <div className='download_links'>
        <h1>
          Download all <span style={imdbColor}>IMDb</span> reviews of {this.props.movieTitle.split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ")} 
        </h1>
        <RaisedButton label=".txt" style={style} onClick={() => this.download(this.props.movieTitle + '_reviews.txt', this.props.reviewsTxt)}/>
        <RaisedButton label=".html" style={style} onClick={() => this.download(this.props.movieTitle + '_reviews.html', this.props.reviewsHtml)}/>
        <RaisedButton label=".json" style={style} />
      </div>
    )
  }
}

export default DownloadLink