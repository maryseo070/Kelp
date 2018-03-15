import React from 'react';
import ReefIndexItem from './reef_index_item';

const ReefIndex = ({ reefs }) => (
  <div>
    <h1>Reefs: </h1>
    {reefs}
  </div>
);

export default ReefIndex;
