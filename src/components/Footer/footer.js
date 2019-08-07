import React from "react";
import "./footer.css";

// component for app footer using prop passed from app.js
const Footer = (props) => {
    return (
        <footer className="footer mt-auto py-3 bg-primary">
            <div className="bottom">{props.children}</div>
        </footer>
    );
}

export default Footer;