import './BasicCards.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* props: 
className(String),
link(url),
height(String),
width(String),
browser(bool), 
browserHeight(String),
browserText(String), 
img(url), 
imgAlt(String),
imgLoading(String),
title(bool),
titleText(String),
hoverOverlay(bool),
hoverOverlayTitle(String),
hoverOverlayText(String),
cornerRibbon(bool),
ribbonText(String)
ribbonIcon(icon),
ribbonColor(String),
github(bool),
githubText(String)
 */

function BasicCards(props) {
    return (
        <div className={`basic-cards-wrapper ${props.className}`}>
            <a href={props.link}>
                <div className={`basic-cards-content 
                ${props.browser ? "basic-cards-show-browser-frame" : ""} 
                ${props.device ? "basic-cards-show-device-frame" : ""}`}
                    style={{ '--height': props.height, '--width': props.width, '--browserHeight': props.browserHeight }}>
                    <div className='basic-cards-browser-text'>{props.browserText}</div>
                    <div className='basic-cards-img-overlay' style={{ display: props.hoverOverlay && "block" }}>
                        <p className='basic-cards-overlay-title'>{props.hoverOverlayTitle}</p>
                        <p className='basic-cards-overlay-text'>{props.hoverOverlayText}</p>
                        <a href={props.deployedLink}><button className={`${props.deployed ? "basic-cards-show-overlay-btn" : "basic-cards-hide-overlay-btn"}`}><FontAwesomeIcon icon="fa-solid fa-globe" className="basic-cards-overlay-ico" />{props.deployedText}</button></a>
                        <a href={props.githubLink}><button className={`${props.github ? "basic-cards-show-overlay-btn" : "basic-cards-hide-overlay-btn"}`}><FontAwesomeIcon icon="fa-brands fa-github" className="basic-cards-overlay-ico" />{props.githubText}</button></a>
                    </div>
                    <img className='basic-cards-img' src={props.img} alt={props.imgAlt} loading={props.imgLoading} />
                    {props.title && <div className='basic-cards-title'>{props.titleText}</div>}
                    <div className={`ribbon-box ${props.cornerRibbon ? "ribbon-box-show" : ""}`}>
                        <div class="ribbon ribbon-top-right" style={{ '--ribboncolor': props.ribbonColor }}><div><span className='ribbon-icon'>{props.ribbonIcon}</span>{props.ribbonText}</div></div>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default BasicCards;