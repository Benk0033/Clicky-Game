import React, { Component } from "react";
import "./scoreboard.css";

const beginMessage = "Click and image to begin!";
const winMessage = "You guessed correctly!";
const loseMessage = "You guessed incorrectly!";

class Scoreboard extends Component {

    // constructor(props) {
    //     super(props);
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }

    // state = {
    //     score: 0,
    //     topScore: 0
    // }

    // handleIncrement = () => {
    //     this.setState({ score: this.state.score + 1 });
    // };


    render() {

        return (
            <div>
                <nav className="navbar fixed-top navbar-dark bg-primary">
                    <span className="navbar-text logo">
                        Clicky Game
                    </span>
                    <span className="navbar-text message">
                        {(this.props.score === 0 && this.props.topScore === 0) ? beginMessage
                            : this.props.score > 0 ? winMessage
                                : loseMessage}
                    </span>
                    <span className="navbar-text scores">
                        Score: {this.props.score} | Top Score: {this.props.topScore}
                    </span>
                </nav>
            </div>
        )
    }
};

// const Scoreboard = (props) => {
//     return (
//         <div>
//             <nav className="navbar sticky-top navbar-dark bg-primary">
//                 <span className="navbar-text">
//                     Clicky Game
//                 </span>
//                 <span className="navbar-text">
//                     Click an image to begin!
//                 </span>
//                 <span className="navbar-text">
//                     Score: {props.score} | Top Score: 0
//                 </span>
//             </nav>
//         </div>
//     )
// }

export default Scoreboard;