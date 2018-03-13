import React from 'react';
import ReefMap from './../reef_map/reef_map';
import ReefIndex from './reef_index.jsx'

const Search = ({reefs, fetchReefs}) => (
  <div>
  <ReefMap reefs={reefs}/>
  <ReefIndex reefs={reefs} fetchReefs={fetchReefs}/>
  </div>
);


export default Search;
