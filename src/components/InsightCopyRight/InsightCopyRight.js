import React from "react";
import './InsightCopyRight.scss';

function InsightCopyRight(props) {
    return (
        <section className="insightRight">
            <img className="leftImage" src={process.env.PUBLIC_URL + '/assets/images/elements/Encon_IG_Deelelementen_'+ props.imageNumber +'.png'}/>
            <div className="insightContentRight">
                <h3 className="headerTitle">{props.title}</h3>
                <p dangerouslySetInnerHTML={{__html: props.content}}></p>
            </div>
        </section>
    );
}

export default InsightCopyRight;
