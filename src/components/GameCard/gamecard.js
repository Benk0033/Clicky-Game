import React, { Component } from "react";
import "./gamecard.css";

// component for the character cards
class GameCard extends Component {

    render() {
        return (
            // runs the shuffle and handleScores function when each card is clicked. Props passed from App.js
            <div className="card" key={this.props.id} data-id={this.props.id} onClick={() => { this.props.shuffle(this.props.char); this.props.handleScores(this.props.id) }}>
                <div className="img-container">
                    <img src={this.props.image} alt={this.props.name} />
                </div>
            </div>
        );
    };

};

export default GameCard;