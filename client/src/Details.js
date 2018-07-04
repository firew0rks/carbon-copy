import React from 'react';

class Details extends React.Component{

  render() {
    return(
    <div style={this.props.style}>
       {this.props.nickName}
      </div>
  );
  }
}
export default Details;

