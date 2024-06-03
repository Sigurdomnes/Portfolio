import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IntoViewEffect from '../../../Modules/IntoViewEffect/IntoViewEffect'
import jsonCards from './jsonTimelineCards.json'

function Timeline() {
    const cards = jsonCards.timelineCards;
    return (
        <div className='timeline'>
            <h1 className='timeline-header'>My Timeline</h1>
            <div className="timeline-content">
                {cards.map((card) => (
                    <IntoViewEffect effect='slide-in-bottom' margin={35}>
                        <div key={card.id} className={`timeline-event ${card.id % 2 === 0 ? 'even' : 'odd'} ${card.id === 0 ? 'start' : ''} `}>
                            <div className={`timeline-event-circle `} style={{ '--circle-color': card.color }}>
                                <h1 className='timeline-event-circle-year'>{card.start_year}</h1>
                            </div>
                            <div className="timeline-event-card">
                                <div className="timeline-event-card-title">
                                    <FontAwesomeIcon className='timeline-event-card-title-icon' icon={card.icon} />
                                    <p className='timeline-event-card-title-descr'>{card.title_descr}</p>
                                </div>
                                <div className="timeline-event-card-content">
                                    <h2 className='timeline-event-card-content-header'>
                                        {card.bulletpoints_header}
                                    </h2>
                                    {card.bulletpoints.map((bulletpoint) => (
                                        <h4 className='timeline-event-card-content-bulletpoints' key={bulletpoint.id}>
                                            <span className='timeline-event-card-content-bulletpoints-span'>
                                                {bulletpoint.year} &bull; <div>{bulletpoint.company && <span>{bulletpoint.company} - </span>}{bulletpoint.descr}</div>
                                            </span>
                                        </h4>
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