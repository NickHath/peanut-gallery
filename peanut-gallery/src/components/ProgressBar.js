import React, {Component} from 'react';
import { Line } from 'rc-progress';
import './ProgressBar.css';
import axios from 'axios';


class ProgressBar extends Component {
  constructor() {
    super();

    this.state = {
      progress: 0.0,
      display: ''
    }
    this.refresh = this.refresh.bind(this);
  }

  componentDidMount() {
    axios.get(`http://localhost:4200/api/refresh`);
    this.setState(this.state);
  }

  componentDidUpdate() {
    if (this.state.progress < 100) {
      this.updateProgress();
    }
  }

  refresh() {
    this.setState({state: this.state});
  }

  updateProgress() {
    axios.get(`http://localhost:4200/api/progress`)
         .then((res) => {
           if (this.state.progress !== res.data.percent) {
             this.setState({progress: res.data.percent, display: res.data.display});
           } else {
             setTimeout(this.refresh, 1000); 
           }
        })
  }

  render() {
    console.log(this.state);
    return(
      <div className='progress_container'> 
        <Line percent={this.state.progress} strokeWidth="1" strokeColor="#9E9E9E" />
        <p>{this.state.display}</p>
      </div>
    )
  }
}



export default ProgressBar;