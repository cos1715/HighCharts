import React from 'react';

import './TableBody.css';

class TableBody extends React.Component {
  renderRows(repos) {
    const { checkboxHandle, selected } = this.props;



    return repos.map((element, index) => (
      <div className={selected.includes(element) ? "table table-body table-body-checked" : "table table-body"} key={index}>
        <div className="table-cell">
          <input type='checkbox' onChange={(event) => checkboxHandle(event, element)} />
        </div>
        <div className="table-cell">{element.id}</div>
        <div className="table-cell">{element.name}</div>
        <div className="table-cell">{element.description}</div>
        <div className="table-cell">{element.stargazers_count}</div>
        <div className="table-cell">{element.watchers}</div>
        <div className="table-cell">{element.forks}</div>
        <div className="table-cell">{element.open_issues}</div>
      </div>
    ));
  }

  render() {
    const { repos } = this.props;
    return (
      this.renderRows(repos)
    );
  }
}

export default TableBody;
