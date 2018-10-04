import React, { Component } from "react";
import TitleBar from "./components/TitleBar"
import Jumbotron from "./components/Jumbotron"
import GameContainer from "./components/GameContainer"
import GameCard from "./components/GameCard";
import Characters from "./Characters.json"

function shuffleCharacters(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  state = {
    Characters,
    score: 0,
    clicked: []
  }

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } 
    else {
      this.handleReset();
    }
  }

  handleIncrement = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore
    });
    if (newScore === 12) {
      alert("Go Team Venture!");
    }
    this.handleShuffle();
  }

  handleReset = () => {
    this.setState({
      score: 0,
      clicked: []
    });
    this.handleShuffle();
  }

  handleShuffle = () => {
    let shuffledCharacters = shuffleCharacters(Characters);
    this.setState({ Characters: shuffledCharacters });
  }
  
  render() {
    return(
      <div>
       <TitleBar
       score={this.state.score} 
       />
       <Jumbotron /> 
       <GameContainer>
          {this.state.Characters.map((el) => (
            <GameCard 
                key={el.id}
                id={el.id} 
                name={el.name} 
                image={el.image}
                handleClick={this.handleClick}
                handleIncrement={this.handleIncrement}
                handleReset={this.handleReset} 
                handleShuffle={this.handleShuffle}
            />))}
        </GameContainer>
      </div>
    )
  }
}

export default App;
