import React from "react";

const GameContainer = props => (
    <div className="container-fluid">
        <div className="container">
            <div class="row">
              {props.children}
			</div>
        </div>
    </div>
)



export default GameContainer;