import { Timeline } from '@mui/lab';
import React from 'react'

import data from '../../mockAPI/timeLine.json'
import TimeLineEvent from './timeLineEvent/timeLineEvent'

const TimeLine = () => {
    return <Timeline>
        {data.map((timeLine,i) => {
            return (
                <TimeLineEvent key={i} timeline={timeLine}></TimeLineEvent>
            )
        })}
    </Timeline>
}

export default TimeLine