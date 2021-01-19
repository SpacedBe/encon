import React from "react";
import './InsightDoubleImage.scss';

function InsightDoubleImage(props) {
    return (
        <section className="insightDouble">
            <h3 className="headerTitle">{props.title}</h3>
            <div className="doubleImages">
                <img src={process.env.PUBLIC_URL + '/assets/images/elements/Encon_IG_Deelelementen_' + props.imageLeftNumber + '.png'} alt={process.env.PUBLIC_URL + '/assets/images/elements/Encon_IG_Deelelementen_' + props.imageRightNumber + '.png'}/>
                <img src={process.env.PUBLIC_URL + '/assets/images/elements/Encon_IG_Deelelementen_' + props.imageRightNumber + '.png'} alt={process.env.PUBLIC_URL + '/assets/images/elements/Encon_IG_Deelelementen_' + props.imageRightNumber + '.png'}/>
            </div>
            <p className="doubleContent" dangerouslySetInnerHTML={{__html: props.content}}></p>
        </section>
    );
}

export default InsightDoubleImage;
