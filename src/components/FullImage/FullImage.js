import React from "react";
import './FullImage.scss';

function FullImage(props) {
    return (
        <div className="fullImage">
            <img
                src={process.env.PUBLIC_URL + '/assets/images/deelelementen/Encon_IG_Deelelementen_' + props.imageNumber + '.png'}/>
        </div>
    );
}

export default FullImage;
