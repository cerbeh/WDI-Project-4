import React from 'react';
import {Timeline, TimelineEvent} from 'react-event-timeline';
import { Link } from 'react-router-dom';

const SessionTimeline = ({data}) => {


  data.sort(function(a,b){
    return new Date(b.date) - new Date(a.date);
  });
  return(
    <Timeline>
      {data.map(session =>
        <Link
          key={session._id}
          to={`/users/${session.creator}/sessions/${session._id}`}>
          <TimelineEvent
            title={session.title}
            subtitle={session.discipline}
            createdAt={session.date}
            icon={<img src="../../assets/image/kendo.svg"/>}
            style={{backgroundColor: '#fff', boxShadow: '0 0 3px 1px #BD3B36'}}
            contentStyle={{backgroundColor: '#00BCD4', color: '#fff'}}
          >
            {session.notes}
          </TimelineEvent>
        </Link>
      )}
    </Timeline>
  );
};

export default SessionTimeline;
