import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Cal from '../../images/calendar.png';

const timelineData = [
  {
    date: '2010 - 2012',
    title: 'Work',
    subtitle: 'Company Name',
    description: 'Description of your work experience or event in the timeline.',
    dotColor: 'bg'
  },
  {
    date: '2012 - 2015',
    title: 'Work',
    subtitle: 'Another Company',
    description: 'Description of another work experience or event in the timeline.',
   
  },
  // Add more timeline elements as needed
];

const Timeline = () => {
  return (
    <VerticalTimeline>
      {timelineData.map((item, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--work"
          date={item.date}
          
        >
          <div className={`rounded-full h-6 w-6 flex items-center justify-center ${item.dotColor}`}>
            <img src={Cal} />
          </div>
          <h3 className="vertical-timeline-element-title">{item.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
          <p>{item.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
