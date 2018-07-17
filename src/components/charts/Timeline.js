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
            container="card"
            cardHeaderStyle={{backgroundColor: '#57d968', color: 'white'}}
            title={session.title}
            titleStyle={{fontSize: '1rem', color: 'white', fontWeight: '900'}}
            subtitle={session.discipline}
            subtitleStyle={{fontSize: '0.75rem'}}
            createdAt={session.date}
            icon={<img src="../../assets/image/kendo.svg"/>}
            bubbleStyle={{borderColor: '#57d968'}}
            style={{backgroundColor: '#fff', boxShadow: '0 0 3px 1px black', borderRadius: '3', width: '75%'}}
            contentStyle={{backgroundColor: 'white', color: 'black', fontWeight: '200'}}>
            {session.notes}
          </TimelineEvent>
        </Link>
      )}
    </Timeline>
  );
};

export default SessionTimeline;
