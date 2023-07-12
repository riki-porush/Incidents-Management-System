import React from 'react';

import data from '../../mockAPI/timeLineEvent.json';
import userdata from '../../mockAPI/users.json';
import { IIncidentprops } from './modules/interface';
import { TimelineWarpper } from './timeLine.style';
import TimeLineEvent from './timeLineEvent/timeLineEvent';
const TimeLine: React.FC<IIncidentprops> = (props) => {

    const { incident } = props
    const { _id } = incident
    const timeLineEvents = data.filter(timeLine => timeLine.incidentId === _id)

    return (
        <div >
            <TimelineWarpper >
                {timeLineEvents.map((timeLine, i) => {
                    const user = userdata.find((u) => u._id === timeLine.userId);
                    const updatedTimeline = {
                        ...timeLine,
                        name: user?.name ?? '',
                        profile: user?.profile ?? '',
                    };
                    return (
                        <TimeLineEvent key={i} timeline={updatedTimeline}></TimeLineEvent>
                    );
                })}
            </TimelineWarpper >
        </div>
    );
};

export default TimeLine