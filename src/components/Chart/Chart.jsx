import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import './Chart.css';

class Chart extends React.Component {
  renderChart() {
    const { selected } = this.props;
    const series = selected.map(element => {
      const data = [];
      data.push(element.stargazers_count);
      data.push(element.watchers);
      data.push(element.forks);
      data.push(element.open_issues);
      return {
        name: element.name,
        data: data
      };
    });

    const options = {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Stacked bar chart'
      },
      xAxis: {
        categories: ['stargazers_count', 'watchers', 'forks', 'open_issues']
      },
      yAxis: {
        min: 0,
        title: {
          text: 'React Charts'
        }
      },
      legend: {
        reversed: true
      },
      plotOptions: {
        series: {
          stacking: 'normal'
        }
      },
      series: series
    }

    console.log(series, options);


    return (
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    );


  }

  render() {
    return this.renderChart();
  }
}

export default Chart;
