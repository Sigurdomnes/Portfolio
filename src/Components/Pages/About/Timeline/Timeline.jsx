import './Timeline.scss'
import IntoViewEffect from '../../../Modules/IntoViewEffect/IntoViewEffect'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import jsonCards from './jsonTimelineCards.json'

function Timeline() {
    const cards = jsonCards.timeline_cards;
    return (
        <div className='timeline'>
            <div className="timeline-content">
                {cards.map((card) => (
                    <IntoViewEffect effect='slide-in-bottom'>
                        <div key={card.id} className={`timeline-event ${card.id % 2 === 0 ? 'even' : 'odd'} ${card.id === 0 ? 'start' : ''} `}>
                                <div className="timeline-event-circle" style={{ '--circle-color': card.color }}>
                                    {card.class === 'school' && <FontAwesomeIcon className='timeline-event-circle-icon' icon="fa-solid fa-book" />}
                                    {card.class === 'work' && <FontAwesomeIcon className='timeline-event-circle-icon' icon="fa-solid fa-briefcase" />}
                                    {card.class === 'graduate' && <FontAwesomeIcon className='timeline-event-circle-icon' icon="fa-solid fa-graduation-cap" />}
                                    {card.class === 'grade-school' && <FontAwesomeIcon className='timeline-event-circle-icon' icon="fa-solid fa-child-reaching" />}
                                </div>
                            <div className="timeline-event-card">
                                <div className="timeline-event-card-title">
                                    <h1>{card.title}</h1>
                                    <p>{card.yearspan}</p>
                                </div>
                                <div className="timeline-event-card-content">
                                    <h2 style={{fontSize: '1.8rem'}}>{card.header}</h2>
                                    {card.bulletpoints.map((bulletpoint) => (
                                        <h4 key={bulletpoint.id}>&emsp;{bulletpoint.year} &#9830; {bulletpoint.descr}</h4>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </IntoViewEffect>
                ))}
            </div>
        </div>
    )
}

export default Timeline