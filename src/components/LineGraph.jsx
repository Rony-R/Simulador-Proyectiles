import React, { Component } from "react";
import Chart from "chart.js";
import classes from "./LineGraph.module.css";

export default class LineGraph extends Component {
  chartRef = React.createRef();

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");
    var mYA = [];
    var mY = 0;

    mYA = this.props.l.yMaxL;

    mY = parseInt(Math.max(...mYA) + 20);

    console.log("Las etiquetas son: " + parseInt(this.props.l.xMaxL));

    //mY = 800;

    new Chart(myChartRef, {
      type: "line",
      data: {
        //Bring in data
        labels: this.props.l.xMaxL,
        datasets: [
          {
            label: this.props.t1,
            borderColor: "blue",
            data: this.props.d1,
            pointHitRadius: 15,
          },
          {
            label: this.props.t2,
            borderColor: "red",
            data: this.props.d2,
            pointHitRadius: 15,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "metros",
              },
              ticks: {
                min: 0,
                //max: 800,
                max: mY,
              },
            },
          ],
        },
      },
    });
  }
  render() {
    return (
      <div className={classes.graphContainer}>
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}
