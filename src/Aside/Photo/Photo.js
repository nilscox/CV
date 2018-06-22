import * as React from 'react';
import './Photo.css';

const Photo = ({ path, alt }) => (
  <section className="photo">
    <img src={path} alt={alt} />
  </section>
);

export default Photo;
