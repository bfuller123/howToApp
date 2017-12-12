import React from 'react';

class Footer extends React.Component {
  playSound(){
    document.getElementById('sample').play();
  }

  render(){
    return (
      <footer className="App-footer">
        <h1 className="App-title" onClick={this.playSound}>{this.props.text}</h1>
      </footer>
    )
  }
}

export default Footer;
