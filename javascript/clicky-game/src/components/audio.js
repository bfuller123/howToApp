import React from 'react';

class AudioSample extends React.Component {
  render(){
    return (
      <audio id="sample" src={this.props.source}>
      </audio>
    )
  }
}

export default AudioSample;
