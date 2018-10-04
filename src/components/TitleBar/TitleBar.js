import React from "react";

const TitleBar = props => (
    <div>
        <ul className="nav navbar-dark nav-fill text-warning py-3">
            <li className="nav-item">
                <a className="nav-link active" href="#">Venture Click Game</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled">Click Image to Start</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled">Score: 
                    {props.score} 
                </a>
            </li>
        </ul>
    </div>
)

export default TitleBar;