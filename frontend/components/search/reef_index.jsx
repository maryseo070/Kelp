import React from 'react';
import ReefIndexItem from './reef_index_item';

const ReefIndex = ({ reefs }) => (
  <div>
    <h1>Reefs: </h1>
    {reefs.map(reef => (
      <ReefIndexItem
        reef={reef}
        key={reef.id}
      />
    ))}
  </div>
);

export default ReefIndex;
