import React from 'react';
import ImageButton from './image-button'
import Header from './header'
import Footer from './footer'
import AudioSample from './audio'
import animals from './../data/animals.json'


class Gameboard extends React.Component {
  state = {
    pig: false,
    horse: false,
    goose: false,
    dog: false,
    cow: false,
    donkey: false,
    cat: false,
    bird: false,
    sheep: false,
    goat: false,
  }

  resetBoard = () => {
    for(let x in this.state){
      let obj = {};
      obj[x] = false;
      this.setState(obj);
    }
  }

  handleClick = (animal) => {
    if(this.state[animal] === false){
      let obj = {};
      obj[animal] = true;
      this.setState(obj);
    }
    else {
      alert('Game over');
      this.resetBoard();
    }
  }

  render(){
    return (
      <div>
        <Header text={"Animal Parade!"}/>
        <div className="App-buttons">
          <ImageButton source={process.env.PUBLIC_URL + animals.animals[0].source} name={animals.animals[0].name} handleClick={this.handleClick}/>
          <ImageButton source={process.env.PUBLIC_URL + animals.animals[1].source} name={animals.animals[1].name} handleClick={this.handleClick}/>
          <ImageButton source={process.env.PUBLIC_URL + animals.animals[2].source} name={animals.animals[2].name} handleClick={this.handleClick}/>
          <ImageButton source={process.env.PUBLIC_URL + animals.animals[3].source} name={animals.animals[3].name} handleClick={this.handleClick}/>
          <ImageButton source={process.env.PUBLIC_URL + animals.animals[4].source} name={animals.animals[4].name} handleClick={this.handleClick}/>
          <ImageButton source={process.env.PUBLIC_URL + animals.animals[5].source} name={animals.animals[5].name} handleClick={this.handleClick}/>
          <ImageButton source={process.env.PUBLIC_URL + animals.animals[6].source} name={animals.animals[6].name} handleClick={this.handleClick}/>
          <ImageButton source={process.env.PUBLIC_URL + animals.animals[7].source} name={animals.animals[7].name} handleClick={this.handleClick}/>
          <ImageButton source={process.env.PUBLIC_URL + animals.animals[8].source} name={animals.animals[8].name} handleClick={this.handleClick}/>
          <ImageButton source={process.env.PUBLIC_URL + animals.animals[9].source} name={animals.animals[9].name} handleClick={this.handleClick}/>
        </div>
        <Footer text={animals.animals[0].find} />
        <AudioSample source={process.env.PUBLIC_URL + animals.animals[0].sound} />
      </div>
    )
  }
}

export default Gameboard;
