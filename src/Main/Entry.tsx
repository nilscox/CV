import React from 'react';

import { Entry as EntryType } from '../types';

export const getDuration = (fromStr: string) => {
  const [fromMonth, fromYear] = fromStr.split('-').map(Number);
  const now = new Date();

  let month = now.getMonth() + 1 - fromMonth;
  let year = now.getFullYear() - fromYear;

  if (month < 0) {
    year -= 1;
    month += 12;
  }

  if (month === 0)
    return `${year}a`;

  return `${year}a, ${month}m`;
};

const Entry: React.FC<EntryType> = ({
  name,
  from,
  to,
  duration,
  location,
  company,
  link,
  description,
  technologies,
}) => {
  return (
    <div className="entry">
      <div className="dates">
        <div className="from">{from}</div>
        {to && <div className="to">{to}</div>}
        {duration && <div className="duration">{duration}</div>}
        {!duration && !to && <div className="duration">{getDuration(from)}</div>}
      </div>

      <div className="content">
        <a href={link} className="head">
          <div className="name">{name}</div>
          {company && (
            <div className="company">
              {company}
              <span className="location">, {location}</span>
            </div>
          )}
        </a>

        <div className="details">
          <div className="description">{description}</div>
          {technologies && <div className="technologies">{technologies.join(', ')}</div>}
        </div>
      </div>
    </div>
  );
};

export default Entry;
