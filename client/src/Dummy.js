import React from 'react';

class Dummy extends React.Component{

  render() {
    return(
    <div style={this.props.style}>
       {this.props.middleName}
       
      </div>
  );
  }
}
export default Dummy;

