import React from "react";
import './SmallCTA.scss';

function SmallCTA(props) {
    return (
        <div className="smallCTA container">
            <div className="content">
                <img className="icon" src={process.env.PUBLIC_URL + '/assets/images/icons/' + props.image}
                     alt={process.env.PUBLIC_URL + '/assets/images/icons/' + props.image}/>
                <p>{props.content}</p>
            </div>

            <div className="logos">
                <img src={process.env.PUBLIC_URL + '/assets/images/icons/' + props.logoOne}
                     alt={process.env.PUBLIC_URL + '/assets/images/icons/' + props.logoOne}/>
                <img src={process.env.PUBLIC_URL + '/assets/images/icons/' + props.logoTwo}
                     alt={process.env.PUBLIC_URL + '/assets/images/icons/' + props.logoTwo}/>
            </div>
        </div>
    );
}

export default SmallCTA;
