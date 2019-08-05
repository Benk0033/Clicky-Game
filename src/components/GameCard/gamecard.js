import React, { Component } from "react";
import "./gamecard.css";

class GameCard extends Component {

    // constructor(props) {
    //     super(props);
    // this.handleIncrement = this.handleIncrement.bind(this)
    // }

    // handleIncrement() {
    //     this.props.sendFunction();
    // }

    // state = {
    //     dbzChars
    // };

    // shuffle = arr => {
    //     for (let i = arr.length - 1; i > 0; i--) {
    //         let j = Math.floor(Math.random() * (i + 1));
    //         [arr[i], arr[j]] = [arr[j], arr[i]];
    //     }

    //     this.setState({ arr });
    // };

    render() {
        return (
            <div className="card" key={this.props.id} data-id={this.props.id} onClick={() => { this.props.shuffle(this.props.char); this.props.handleScores(this.props.id) }}>
                <div className="img-container">
                    <img src={this.props.image} alt={this.props.name} />
                </div>
            </div>
        )
    };

};

// const GameCard = (props) => {

//     return (
//         <div className="card" key={props.id} data-id={props.id} onClick={() => { props.shuffle(props.char); props.incrementScore(props.id) }}>
//             <div className="img-container">
//                 <img src={props.image} alt={props.name} />
//             </div>
//         </div>
//     )
// }

export default GameCard;