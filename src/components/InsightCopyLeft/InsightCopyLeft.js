import React from "react";
import './InsightCopyLeft.scss';

function InsightCopyLeft(props) {
    return (
        <section className="insight">
            <div className="insightContent">
                <h3 className="headerTitle">{props.title}</h3>
                <p dangerouslySetInnerHTML={{__html: props.content}}></p>
            </div>
            <img className="image" src={process.env.PUBLIC_URL + '/assets/images/deelelementen/Encon_IG_Deelelementen_'+ props.imageNumber +'.png'}/>
        </section>
    );
}

export default InsightCopyLeft;
