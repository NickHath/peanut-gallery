import React, {Component} from 'react';
import LinearProgress from 'material-ui/LinearProgress';

class ProgressBar extends Component {

  render() {
    return(
      <LinearProgress mode="indeterminate" />
    )
  }
}


export default ProgressBar;