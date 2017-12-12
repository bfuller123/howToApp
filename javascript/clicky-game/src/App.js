import React, { Component } from 'react';
import Gameboard from './components/gameboard'
import './App.css';
// import ImageButton from './components/image-button'
// import Header from './components/header'
// import Footer from './components/footer'
// import AudioSample from './components/audio'
// import animals from './data/animals.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Gameboard />
      </div>
    );
  }
}
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Header text={"Animal Parade!"}/>
//         <div className="App-buttons">
//           <ImageButton source={process.env.PUBLIC_URL + animals.animals[0].source}/>
//           <ImageButton source={process.env.PUBLIC_URL + animals.animals[1].source}/>
//           <ImageButton source={process.env.PUBLIC_URL + animals.animals[2].source}/>
//           <ImageButton source={process.env.PUBLIC_URL + animals.animals[3].source}/>
//           <ImageButton source={process.env.PUBLIC_URL + animals.animals[4].source}/>
//           <ImageButton source={process.env.PUBLIC_URL + animals.animals[5].source}/>
//           <ImageButton source={process.env.PUBLIC_URL + animals.animals[6].source}/>
//           <ImageButton source={process.env.PUBLIC_URL + animals.animals[7].source}/>
//           <ImageButton source={process.env.PUBLIC_URL + animals.animals[8].source}/>
//           <ImageButton source={process.env.PUBLIC_URL + animals.animals[9].source}/>
//         </div>
//         <Footer text={animals.animals[0].find} />
//         <AudioSample source={process.env.PUBLIC_URL + animals.animals[0].sound} />
//       </div>
//     );
//   }
// }

export default App;
