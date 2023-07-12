import React, { useEffect, useState } from 'react';

import data from '../../mockAPI/timeLineEvent.json';
import userdata from '../../mockAPI/users.json';
import { IIncidentprops } from './modules/interface';
import { TimelineWarpper } from './timeLine.style';
import TimeLineEvent from './timeLineEvent/timeLineEvent';
const TimeLine: React.FC<IIncidentprops> = (props) => {

    const { incident } = props
    const { _id } = incident
    const timeLineEvents = data.filter(timeLine => timeLine.incidentId === _id)
    const [priorityChanged, setPriorityChanged] = useState(false)
    const [typeChanged, setTypeChanged] = useState(false)
    const [type, setType] = useState("")
    const [priority, setPriority] = useState("")

    useEffect(() => {
        if (timeLineEvents.length > 0) {
            setPriority(timeLineEvents[0].priority);
            setType(timeLineEvents[0].type);
        }
    }, [timeLineEvents]);
    return (
        <TimelineWarpper >
            {timeLineEvents.map((timeLine, i) => {
                // timeLine.type != type ? setTypeChanged(true) : setTypeChanged(false)
                // timeLine.priority != priority ? setPriorityChanged(true) : setPriorityChanged(false)
                // setPriority(timeLine.priority)
                // setType(timeLine.type)
                const user = userdata.find((u) => u._id === timeLine.userId);
                const updatedTimeline = {
                    ...timeLine,
                    name: user?.name ?? '',
                    profile: user?.profile ?? '',
                };
                return (
                    <TimeLineEvent
                        key={i}
                        timeline={updatedTimeline}
                        isPriorityChanged={priorityChanged}
                        isTypeChanged={typeChanged}
                        previousType={type}
                        previosPriority={priority}
                    />
                );
            })}
        </TimelineWarpper >
    );
};

export default TimeLine