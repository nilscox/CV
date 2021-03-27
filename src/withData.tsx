import React, { ComponentType } from 'react';

import { Data } from './types';

declare const DATA: Data;

if (document) {
  console.log("This is my resume, literally (:");
  console.log(DATA);
}

const withData = (Component: ComponentType<Data>): React.FC => {
  return () => <Component {...DATA} />;
};

export default withData;
