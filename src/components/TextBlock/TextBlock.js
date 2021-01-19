import React from "react";
import './TextBlock.scss';

function TextBlock(props) {
    return (
        <section className="textBlock">
            <div className="grey block left">
                <h3>{props.greyTitle}</h3>
                <p className="content">{props.greyContent}</p>
            </div>
            <div className="green block right">
                <h3>{props.greenTitle}</h3>
                <p className="content">{props.greenContent}</p>
            </div>
        </section>
    );
}

export default TextBlock;
