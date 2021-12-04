import React from 'react';

function Image(props) {
  return (
    <img src={props.name} alt="Moana"  className="img-fluid content-image"/>
  );
};

export default Image;