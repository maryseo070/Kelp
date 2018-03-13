import React from 'react';


const ReefIndexItem = ({reef}) => {
  let indexItem;
  if (reef) {
    indexItem =
    <div>
      <div className="ii-name" key={reef.id}>{reef.name}</div>
      <div>{Math.round(reef.avg_rating)}</div>
      <div>{reef.lat}</div>
      <div>{reef.lng}</div>
    </div>
  }
  return (
    indexItem
  );
};

export default ReefIndexItem;
