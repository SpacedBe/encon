import React from "react";
import './BigCTA.scss';

function BigCTA(props) {
    return (
        <div className="bigCTA">
            <div className="content">
                <div>
                    <h2>{props.title}</h2>
                    <p dangerouslySetInnerHTML={{__html: props.content}}></p>
                </div>
            </div>

            <img className="cornerImage"
                 src={process.env.PUBLIC_URL + '/assets/images/icons/' + props.cornerImage}/>

            <div className="logos">
                <img src={process.env.PUBLIC_URL + '/assets/images/icons/' + props.logoOne}/>
                <img src={process.env.PUBLIC_URL + '/assets/images/icons/' + props.logoTwo}/>
            </div>
        </div>
    );
}

export default BigCTA;
