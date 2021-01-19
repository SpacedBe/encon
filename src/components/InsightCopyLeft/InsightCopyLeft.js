import React from "react";
import './InsightCopyLeft.scss';

function InsightCopyLeft(props) {
    return (
        <section className="insightLeft">
            <div className="insightContentLeft">
                <h3 className="headerTitle">{props.title}</h3>
                <p dangerouslySetInnerHTML={{__html: props.content}}></p>
            </div>
            <img className="rightImage"
                 src={process.env.PUBLIC_URL + '/assets/images/elements/Encon_IG_Deelelementen_' + props.imageNumber + '.png'}
                 alt={process.env.PUBLIC_URL + '/assets/images/elements/Encon_IG_Deelelementen_' + props.imageNumber + '.png'}/>
        </section>
    );
}

export default InsightCopyLeft;
