import TimelineContent from '@mui/lab/TimelineContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { Avatar } from '@mui/material';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';
import React from 'react';

import Attachment from '../attachment';
import { ITimeLineEventprops } from '../modules/interface';
import { TimelineConnectorWrapper, TimelineDotWrapper, TimelineItemWrapper } from './timeLineEvent.style';


const timeLineEvent: React.FC<ITimeLineEventprops> = (props) => {

    const { timeline, isPriorityChanged, isTypeChanged, previousType, previosPriority } = props
    const { profile, name, description } = timeline
    const date = dayjs(timeline.createdDate).format("DD/MM/YYYY")

    return <div >
        <TimelineItemWrapper>
            <TimelineSeparator>
                <TimelineDotWrapper>
                    <Avatar src={profile} alt={name} />
                </TimelineDotWrapper>
                <TimelineConnectorWrapper />
            </TimelineSeparator>
            <TimelineContent>
                <Typography variant='bold'>
                    {name}
                </Typography>
                <Typography variant='date'>
                    {date.toString()}
                </Typography>
                <Typography variant='longText'>
                    {timeline.description}
                </Typography>
                {isPriorityChanged ? <Typography> priority change:{timeline.priority} to{previosPriority}</Typography> : ""}
                {isTypeChanged ? <Typography> type change:{timeline.type} to{previousType}</Typography> : ""}
            </TimelineContent>
        </TimelineItemWrapper>
        <Attachment />
    </div>
}

export default timeLineEvent