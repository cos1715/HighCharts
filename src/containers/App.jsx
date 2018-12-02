import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { reposSelected, reposFetched } from '../actions/';

import TableHeader from '../components/TableHeader';
import TableBody from '../components/TableBody';
import Chart from '../components/Chart';

import MDSpinner from 'react-md-spinner';

import './App.css';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const { reposFetched } = this.props;
    const api = 'https://api.github.com/search/repositories?q=react';
    reposFetched(api);
  }

  handleChange = (event, element) => {
    const { repos, reposSelected } = this.props;
    const selectedArr = repos.selected.slice();

    if (event.target.checked) {
      selectedArr.push(element);
    }
    else {
      const index = selectedArr.indexOf(element);
      selectedArr.splice(index, 1);
    }
    reposSelected(selectedArr);
  }

  render() {
    const { repos } = this.props;

    if (repos.fethedRepos) {
      return (
        <div>
          <TableHeader />
          <TableBody repos={repos.fethedRepos} checkboxHandle={this.handleChange} selected={repos.selected} />
          <Chart selected={repos.selected} />
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

function mapStateToProps(state) {
  return {
    repos: state.repos
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    reposSelected: reposSelected,
    reposFetched: reposFetched
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
