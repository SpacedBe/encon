import React from "react";
import './InsightCopyLeft.scss';

function InsightCopyLeft(props) {
    return (
        <section>
            <h3 className="headerTitle">{props.title}</h3>
            <div>
                <p dangerouslySetInnerHTML={{__html: props.content}}></p>
                <img src={'../../assets/images/deelelement_' + props.number + '.png'}/>
            </div>
        </section>
    );
}

export default InsightCopyLeft;

<li>
</li>

