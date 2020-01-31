import React, { Component } from "react";
import ChartData from './ChartData.js'
import { Line } from 'react-chartjs-2';

export default class Chart extends Component {
  constructor() {
    super()
    this.state = {
      data: ChartData
    }
  }

  componentDidMount() {
    //API Call here
  }

  render() {
    return (
      <div className="chart common">
        <h1>Hourly Chart</h1>
          <Line data={this.state.data} />
      </div>
    )
  }
}

