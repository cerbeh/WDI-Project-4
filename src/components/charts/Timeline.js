import React from 'react';
import {Timeline, TimelineEvent} from 'react-event-timeline';
import { Link } from 'react-router-dom';

import Auth from '../../lib/Auth';

const SessionTimeline = ({data}) => {


  data.sort(function(a,b){
    return new Date(b.date) - new Date(a.date);
  });

  return(
    <Timeline
      lineColor={'#57d968'}>
      {data.map(session =>
        <Link
          key={session._id}
          to={`/users/${Auth.getPayload().sub}/sessions/${session._id}`}>
          <TimelineEvent
            title={session.title}
            titleStyle={{fontSize: '2rem'}}
            subtitle={session.discipline}
            subtitleStyle={{fontSize: '1rem'}}
            createdAt={session.date}
            icon={<img src="../../assets/image/kendo.svg"/>}
            bubbleStyle={{borderColor: '#57d968'}}>
            {session.notes}
          </TimelineEvent>
        </Link>
      )}
    </Timeline>
  );
};

export default SessionTimeline;
