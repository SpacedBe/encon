import React from "react";
import './TextBlock.scss';

function TextBlock(props) {
    return (
        <section className="blocks">
            <div className="grey block">
                <h3>{props.greyTitle}</h3>
                <p className="content">{props.greyContent}</p>
            </div>
            <div className="green block">
                <h3>{props.greenTitle}</h3>
                <p className="content">{props.greenContent}</p>
            </div>
        </section>
    );
}

export default TextBlock;
