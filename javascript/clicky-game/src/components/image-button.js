import React from 'react';

class ImageButton extends React.Component {

  render(){
    return (<img src={this.props.source} onClick={() => this.props.handleClick(this.props.name)}/>);
  }
}

export default ImageButton;
