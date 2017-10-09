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
  }

  componentDidMount() {
    this.setState(this.state);
  }

  componentDidUpdate() {
    if (this.state.progress < 100) {
      // this.setState({progress: this.state.progress + 10.0}, () => console.log(this.state));
      this.updateProgress();
    }
  }

  updateProgress() {
    axios.get(`http://localhost:4200/api/progress`)
         .then((res) => this.setState({progress: res.data.percent, display: res.data.display}, ()=>console.log(this.state)))
  }

  render() {
    return(
      <div className='progress_container'> 
        <Line percent={this.state.progress} strokeWidth="1" strokeColor="#9E9E9E" />
        <p>{this.state.display}</p>
      </div>
    )
  }
}



export default ProgressBar;