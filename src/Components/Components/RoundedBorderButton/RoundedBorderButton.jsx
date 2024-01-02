import './RoundedBorderButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function RoundedBorderButton(props) {
    return (
        <div className={props.className} onClick={props.onClick}>
            <a href={props.downloadFile} download>
            <button className='rounded-border-button'
                style={{ height: props.height, "--rounded-btn-width": props.width, "--rounded-btn-color": props.color, '--rounded-btn-bg-color': props.bgColor, fontSize: props.fontSize, "--rounded-btn-bg-hover-color": props.hoverColor,
                        backgroundColor: props.backgroundColor, '--rounded-btn-hover-fill': props.hoverFill, '--rounded-btn-arrow-hover-color': props.arrowHoverColor }}
                onClick={props.onClick}>{props.text}
                <div className={props.arrow ? "arrow" : "hide-arrow"}><FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" /></div>
                <div className={props.download ? "download" : "hide-arrow"}><FontAwesomeIcon icon="fa-solid fa-circle-arrow-down" /></div>
            </button>
            </a>
            <br/>
        </div>
    );
}

export default RoundedBorderButton;