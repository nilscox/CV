import React from 'react';

import { Data } from '../types';
import withData from '../withData';

const Headline: React.FC<Data> = ({ headline }) => (
  <div className="headline">
    {headline}
  </div>
);

export default withData(Headline);
