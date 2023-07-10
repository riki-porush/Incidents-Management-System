import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { Avatar } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';

import { ITimeLineEventprops } from './modules/interface';
import { TimelineConnectorWrapper, TimelineDotWrapper, TimelineItemWrapper } from './timeLineEvent.style';
import Attachment from './attachment';


const timeLineEvent: React.FC<ITimeLineEventprops> = (props) => {
    const { timeline } = props
    const { incidentId, profile, name, date, description, priority} = timeline
    return <div style={{ display: 'flex' }}>
        <TimelineItemWrapper>
            <TimelineSeparator>
                <TimelineDotWrapper>
                    <Avatar src={profile} />
                </TimelineDotWrapper>
                <TimelineConnectorWrapper />
            </TimelineSeparator>
            <TimelineContent>
                <Typography>
                    {name}
                </Typography>
                <Typography>
                    {date.toString()}
                </Typography>
                <TimelineOppositeContent>
                    {description}
                </TimelineOppositeContent>
            </TimelineContent>
        </TimelineItemWrapper>
        <Attachment/>
    </div>
}

export default timeLineEvent