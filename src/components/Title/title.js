import React from "react";
import "./title.css";

// title component using props passed from App.js
const Title = (props) => {
    return (
        <div>
            <h1 className="title">{props.children}</h1>
            <h2 className="game-details">Click on an image to earn points, but don't click on any more than once!</h2>
        </div>
    );
}

export default Title;