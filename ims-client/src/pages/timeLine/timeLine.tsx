
import React, { useEffect, useState } from 'react';
import data from '../../mockAPI/timeLineEvent.json';
import userdata from '../../mockAPI/users.json';
import { Idincidentprops } from './modules/interface';
import { TimelineWarpper } from './timeLine.style';
import TimeLineEvent from './timeLineEvent/timeLineEvent';
import { ITimeLineEventprops } from './modules/interface'


const TimeLine: React.FC<Idincidentprops> = (props) => {
  const { _id } = props;
  const timeLineEvents = data.filter((timeLine) => timeLine.incidentId === _id).sort((a, b) => new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime());
  const [timelineObjects, setTimelineObjects] = useState<ITimeLineEventprops[]>([]);
  useEffect(() => {

    if (timeLineEvents.length > 0) {
      const updatedTimelineObjects = timeLineEvents.map((timeLine, index) => {
        const user = userdata.find((u) => u._id === timeLine.userId);
        const updatedTimeline: ITimeLineEventprops = {
          timeline: { ...timeLine },
          name: user?.name ?? '',
          profile: user?.profile ?? '',
          previosPriority: "",
          previousType: "",
          isTypeChanged: false,
          isPriorityChanged: false
        };

        if (index < timeLineEvents.length - 1) {
          const previousTimeline = timeLineEvents[index + 1];
          if (timeLine.priority !== previousTimeline.priority) {
            updatedTimeline.isPriorityChanged = true;
            updatedTimeline.previosPriority = previousTimeline.priority
          }
          if (timeLine.type !== previousTimeline.type) {
            updatedTimeline.isTypeChanged = true;
            updatedTimeline.previousType = previousTimeline.type
          }
        }

        return updatedTimeline;
      });

      setTimelineObjects(updatedTimelineObjects);
    }
  }, []);

  return (
    <TimelineWarpper>
      {timelineObjects.map((timeLine: ITimeLineEventprops, i: number) => (
        <TimeLineEvent
          key={i}
          timeline={timeLine.timeline}
          isPriorityChanged={timeLine.isPriorityChanged}
          isTypeChanged={timeLine.isTypeChanged}
          previousType={timeLine.previousType}
          previosPriority={timeLine.previosPriority}
          profile={timeLine.profile}
          name={timeLine.name}
        />
      ))}
    </TimelineWarpper>
  );
};

export default TimeLine;