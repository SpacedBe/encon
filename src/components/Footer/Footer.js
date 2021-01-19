import React from "react";
import './Footer.scss';
import footericon from "../../assets/images/encon_sec_logo.svg"

function Footer(props) {
    return (
        <footer className="footer">
            <div className="content">
                <img className="logo" src={footericon} alt={footericon}/>
                <p dangerouslySetInnerHTML={{__html: props.content}}></p>
            </div>
            <p className="copyright">{props.copyright}</p>
        </footer>
    );
}

export default Footer;
