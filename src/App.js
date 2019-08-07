import React, { Component } from 'react';
import './App.css';
// importing in children components for layout and to pass in props
import Title from "./components/Title/title";
import Scoreboard from './components/Scoreboard/scoreboard';
import GameCard from './components/GameCard/gamecard';
import Footer from './components/Footer/footer';
// import in list of characters json file
import dbzChars from "./dbzChars.json";


// class (stateful component) to maintain different states
class App extends Component {

  // states for game
  state = {
    dbzChars,
    score: 0,
    topScore: 0,
    topScoreArr: [],
    alreadyclicked: []
  };

  // shuffles cards when page loads
  componentDidMount() {
    this.shuffle(this.state.dbzChars)
  };

  // function to shuffle cards randomly
  shuffle = arr => {

    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    };

    this.setState({ arr });
  };

  // function to handle the scores and top score
  handleScores = (id) => {

    // update alreadyClicked array state with cards already clicked by user
    this.setState(prevState => ({ alreadyclicked: [...prevState.alreadyclicked, id] }));

    // if card clicked not in alreadyClicked array, increment score by 1 then push score to topScoreArr
    if (this.state.alreadyclicked.indexOf(id) === -1) {
      this.setState({
        score: this.state.score + 1,
        topScoreArr: this.state.topScoreArr.concat(this.state.score + 1)
      },
        () => {
          // top score will me the max integer in topScoreArr
          this.setState({ topScore: Math.max(...this.state.topScoreArr) });
        });
    } else {
      // else reset score to zero and empty alreadyClicked array
      this.setState({ score: 0, alreadyclicked: [] });
    };

  };

  render() {

    return (
      <div>

        <Scoreboard
          score={this.state.score}
          topScore={this.state.topScore} />

        <Title>Clicky Game!</Title>

        <main className="container">
          {/* loop and display each game card */}
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
    );

  };
};

export default App;
