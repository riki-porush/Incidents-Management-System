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

    const { timeline } = props
    const { profile, name, description } = timeline
    const date = dayjs(timeline.createdDate).format("DD/MM/YYYY")

    return <div >
        <TimelineItemWrapper>
            <TimelineSeparator>
                <TimelineDotWrapper>
                    <Avatar src={profile} />
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
                    {description}
                </Typography>
            </TimelineContent>
        </TimelineItemWrapper>
        <Attachment />
    </div>
}

export default timeLineEvent