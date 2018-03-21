import React from "react";
import "./TrumpCard.css";

const TrumpCard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectTrump(props.emotion)} 
                className={props.curScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
            >
                <img alt={props.emotion} src={props.image} />
            </a>
        </div>
    </div>
);

export default TrumpCard;