import React from 'react';

import './TableHeader.css';

const TableHeader = () => {
  return (
    <div className="table">
      <div className="table-cell"></div>
      <div className="table-cell">id</div>
      <div className="table-cell">name</div>
      <div className="table-cell">description</div>
      <div className="table-cell">stargazers_count</div>
      <div className="table-cell">watchers</div>
      <div className="table-cell">forks</div>
      <div className="table-cell">open_issues</div>
    </div>
  );
}

export default TableHeader;
