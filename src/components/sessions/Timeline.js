import React from 'react';
import {Timeline, TimelineEvent} from 'react-event-timeline';
import { Link } from 'react-router-dom';

const SessionTimeline = (data) => {
  console.log(data.data);
  return(
    <Timeline>
      {data.data.map(session =>
        <Link
          key={session._id}
          to={`/users/${session.creator}/sessions/${session._id}`}>
          <TimelineEvent
            title={session.title}
            subtitle={session.discipline}
            createdAt={session.date}
            // icon={<i className="material-icons md-18">textsms</i>}
          >
            {session.notes}
          </TimelineEvent>
        </Link>
      )}
    </Timeline>
  );
};

export default SessionTimeline;
