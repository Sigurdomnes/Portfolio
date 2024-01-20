import './RoundedBorderButton.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function RoundedBorderButton(props) {
    return (
        <div className={props.className} onClick={props.onClick}>
            <a href={props.downloadFile} download={props.fileName}>
                <button className={`rounded-border-button ${props.mobile ? 'mobile' : ''}`}
                    style={{
                        height: props.height,
                        "--rounded-btn-width": props.width,
                        "--rounded-btn-color": props.color,
                        '--rounded-btn-bg-color': props.bgColor,
                        fontSize: props.fontSize,
                        "--rounded-btn-bg-hover-color": props.hoverBgColor,
                        backgroundColor: props.backgroundColor
                    }}
                    onClick={props.onClick}>
                    <p className='rounded-button-text'>{props.text}</p>
                    <div className={props.arrow ? "arrow" : "hide-arrow"}><FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" /></div>
                    <div className={props.download ? "download" : "hide-arrow"}><FontAwesomeIcon icon="fa-solid fa-circle-arrow-down" /></div>
                </button>
            </a>
            <br />
        </div>
    );
}

export default RoundedBorderButton;