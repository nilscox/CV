import React from 'react';

import photo from './photo.jpg';

const Photo: React.FC = () => {
  return <img src={photo} alt="Hello! =)" className="photo" />;
};

export default Photo;
