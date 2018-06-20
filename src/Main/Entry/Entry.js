import * as React from 'react';
import './Entry.css';

const Entry = ({ startDate, endDate, title, description, technos, location }) => (
  <div className="entry">

    <div className="dates">
      <span className="start">{ startDate }</span> &mdash;
      <span className="end">{ endDate }</span>
    </div>

    <div className="info">

      <div className="header">
        <span className="title">{ title }</span>
        <span className="location">{ location }</span>
      </div>

      <div className="details">
        { technos && <div className="technos">{ technos }</div> }
        <div className="description">{ description }</div>
      </div>

    </div>

  </div>
);

export default Entry;
