import React from 'react';
import {Timeline, TimelineEvent} from 'react-event-timeline';
import { Link } from 'react-router-dom';

const SessionTimeline = ({data}) => {

  const sortedSessions = data.sort((a,b) => {
    return b.date - a.date;
  });
  // console.log(sortedSessions, 'sortedSessions');
  // console.log(data);

  return(
    <Timeline>
      {data.sort((a,b) => {
        return b.date - a.date;
      }).map(session =>
        <Link
          key={session._id}
          to={`/users/${session.creator}/sessions/${session._id}`}>
          <TimelineEvent
            title={session.title}
            subtitle={session.discipline}
            createdAt={session.date}
            // icon={<i className="fas fa-dumbbell fa-2x"></i>}
          >
            {session.notes}
          </TimelineEvent>
        </Link>
      )}
    </Timeline>
  );
};

export default SessionTimeline;
