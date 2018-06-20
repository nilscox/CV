import * as React from 'react';
import './Header.css';

const Header = ({ firstName, lastName, nick, summary }) => (
  <header>

    <h1>
      <span className="firstname">
        <span>{ firstName[0] }</span>
        <span>{ firstName.substr(1) }</span>
      </span>

      { nick && <span className="nick">`{ nick }`</span> }

      <span className="lastName">
        <span>{ lastName[0] }</span>
        <span>{ lastName.substr(1) }</span>
      </span>
    </h1>

    { summary && <div className="summary">{`<!-- ${summary} -->`}</div> }

    { /* wrap the hr around a div because we\'re in a flex container */ }
    <div>
      <hr />
    </div>

  </header>
);

export default Header;
