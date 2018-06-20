import * as React from 'react';

const Header = ({ firstName, nick, lastName }) => (
  <header>
    <h1>
      <span className="firstname">{ firstName }</span>
      { nick && <span className="nick">`{ nick }`</span> }
      <span className="lastname">{ lastName }</span>
    </h1>
  </header>
);

export default Header;
