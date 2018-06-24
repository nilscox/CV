import * as React from 'react';
import './Entry.css';

const Entry = ({ startDate, endDate, title, url, description, technos, location }) => (
  <div className="entry">

    <div className="dates">
      { endDate && <div className="end">{ endDate }</div> }
      { startDate && <div className="start">{ startDate }</div> }
    </div>

    <div className="info">

      <div className="header">
        <span className="title">
          { url ? <a href={url}>{ title }</a> : title }
        </span>
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
