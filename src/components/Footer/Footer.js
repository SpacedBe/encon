import React from "react";
import './Footer.scss';
import footericon from "../../assets/images/encon_sec_logo.svg"

function Footer(props) {
    return (
        <footer className="footer">
            <div className="wrapper">
                <div className="content">
                    <img className="logo" src={footericon} alt={footericon}/>
                    <p dangerouslySetInnerHTML={{__html: props.content}}></p>
                </div>
                <p className="copyright">{props.copyright}</p>
            </div>
        </footer>
    );
}

export default Footer;
