import React from 'react';

class Description extends React.Component {
  render() {
    return (
      <div>
        <p> {this.props.name} </p>
      </div>
    )
  }
};

export default Description;