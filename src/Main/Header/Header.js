import * as React from 'react';
import './Header.css';

const Name = ({ first, last, nick }) => (
  <h1>
    <span className="firstname">
      <span>{ first[0] }</span>
      <span>{ first.substr(1) }</span>
    </span>

    { nick && <span className="nick">`{ nick }`</span> }

    <span className="lastName">
      <span>{ last[0] }</span>
      <span>{ last.substr(1) }</span>
    </span>
  </h1>
);

const Summary = ({ summary, cvUrl }) => (
  summary && (cvUrl
    ? <a href={cvUrl}><div className="summary">{`<!-- ${summary} -->`}</div></a>
    : <div className="summary">{`<!-- ${summary} -->`}</div>
  )
);

/* wrap the hr around a div because we\'re in a flex container */
const Hr = () => <div><hr /></div>;

const Header = ({ firstName, lastName, nick, summary, cvUrl }) => (
  <header>

    <Name first={firstName} last={lastName} nick={nick} />
    <Summary summary={summary} cvUrl={cvUrl} />
    <Hr />

  </header>
);

export default Header;
