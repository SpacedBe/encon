import React from "react";
import './FullImage.scss';

function FullImage(props) {
    return (
        <div className="fullImage">
            <img
                src={process.env.PUBLIC_URL + '/assets/images/elements/Encon_IG_Deelelementen_' + props.imageNumber + '.png'}/>
        </div>
    );
}

export default FullImage;
