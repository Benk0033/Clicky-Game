import React, { Component } from "react";
import "./scoreboard.css";

// variables for different game messages displayed on scoreboard depending on various conditions
const beginMessage = "Click an image to begin!";
const winMessage = <p className="text-success text-uppercase font-weight-bold" >You guessed correctly!</p>;
const loseMessage = <p className="text-danger text-uppercase font-weight-bold" >You guessed incorrectly!</p>;

// component for scoreboard using props passed from App.js
class Scoreboard extends Component {

    render() {

        return (
            <div>
                <nav className="navbar fixed-top navbar-dark bg-primary">
                    <span className="navbar-text logo">
                        Clicky Game
                    </span>
                    <span className="navbar-text message">
                        {/* ternary operator to display various messages on scoreboard based on conditions */}
                        {(this.props.score === 0 && this.props.topScore === 0) ? beginMessage
                            : this.props.score > 0 ? winMessage
                                : loseMessage}
                    </span>
                    <span className="navbar-text scores">
                        {/* displays score and top score */}
                        Score: {this.props.score} | Top Score: {this.props.topScore}
                    </span>
                </nav>
            </div>
        );
    };
};

export default Scoreboard;