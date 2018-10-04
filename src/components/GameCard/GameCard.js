import React from "react"

const GameCard = props => (
    <div className="col-sm-6 col-md-3 mb-4">
        <div 
        className="card holder"
        value={props.id} 
        onClick={() => props.handleClick(props.id)}>
            
            <div className="img-container">
                <img alt={props.name} src={props.image} />
                <p>{props.name}</p>
            </div>
        </div>
    </div>
)
export default GameCard;