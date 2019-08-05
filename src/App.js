import React, { Component } from 'react';
import './App.css';
// import Wrapper from "./components/Wrapper/wrapper";
import Title from "./components/Title/title";
import Scoreboard from './components/Scoreboard/scoreboard';
import dbzChars from "./dbzChars.json";
import GameCard from './components/GameCard/gamecard';
import Footer from './components/Footer/footer';

class App extends Component {

  state = {
    dbzChars,
    score: 0,
    topScore: 0,
    topScoreArr: [],
    alreadyclicked: []
  };

  componentDidMount() {
    this.shuffle(this.state.dbzChars)
  };

  shuffle = arr => {

    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    };

    this.setState({ arr });
  };

  handleScores = (id) => {

    this.setState(prevState => ({ alreadyclicked: [...prevState.alreadyclicked, id] }));

    if (this.state.alreadyclicked.indexOf(id) === -1) {
      this.setState({
        score: this.state.score + 1,
        topScoreArr: this.state.topScoreArr.concat(this.state.score + 1)
      },
        () => {
          this.setState({ topScore: Math.max(...this.state.topScoreArr) });
        });
    } else {
      this.setState({ score: 0, alreadyclicked: [] });
    };

  };

  render() {

    return (
      // <Wrapper>
      <div>
        <Scoreboard
          score={this.state.score}
          topScore={this.state.topScore} />
        <Title>Clicky Game!</Title>
        <main className="container">
          {this.state.dbzChars.map(char => (
            <GameCard
              shuffle={this.shuffle}
              id={char.id}
              key={char.id}
              name={char.name}
              image={char.image}
              char={dbzChars}
              handleScores={this.handleScores}
            />
          ))}
        </main>
        <Footer>Copyright 2019</Footer>
      </div >
      // </Wrapper>
    );

  };
};

export default App;
