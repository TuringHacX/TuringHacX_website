import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2010 - 2012"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Work</h3>
        <h4 className="vertical-timeline-element-subtitle">Company Name</h4>
        <p>
          Description of your work experience or event in the timeline.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2012 - 2015"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Work</h3>
        <h4 className="vertical-timeline-element-subtitle">Another Company</h4>
        <p>
          Description of another work experience or event in the timeline.
        </p>
      </VerticalTimelineElement>

      {/* Add more timeline elements as needed */}
    </VerticalTimeline>
  );
};

export default Timeline;
