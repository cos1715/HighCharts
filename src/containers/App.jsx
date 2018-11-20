import React from 'react';

import TableHeader from '../components/TableHeader';
import TableBody from '../components/TableBody';
import Chart from '../components/Chart';

import MDSpinner from 'react-md-spinner';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: '',
      selected: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    try {
      const data = await fetch(
        'https://api.github.com/search/repositories?q=react'
      );
      const elements = await data.json();
      const repos = elements.items.splice(0, 5);

      this.setState(() => {
        return {
          repos: repos
        };
      });
    } catch (error) {
      console.error(error);
    }
  }

  handleChange = (event, element) => {
    const { selected } = this.state;
    const selectedArr = selected.slice();

    if (event.target.checked) {
      selectedArr.push(element);
    }
    else {
      const index = selectedArr.indexOf(element);
      selectedArr.splice(index, 1);
    }
    this.setState(() => {
      return {
        selected: selectedArr
      };
    });
  }

  render() {
    const { repos, selected } = this.state;
    if (repos) {
      return (
        <div>
          <TableHeader />
          <TableBody repos={repos} checkboxHandle={this.handleChange} selected={selected} />
          <Chart />
        </div>
      );
    } else {
      return (
        <div className="app-spinner">
          <MDSpinner size={100} />
        </div>
      );
    }
  }
}

export default App;
