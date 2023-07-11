import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { Box } from '@mui/material';
import theme from '../../theme';
import{NewPaper,NewBox,NewButtonBase,Img} from './Widget.style'

interface WidgetProps{
  title: string;
  aggregation:number;
  img?:string;
}



export default function Widget({title,aggregation,img}:WidgetProps) {
  const formattedAggregation = aggregation.toLocaleString();
  return (
      <NewPaper>
      <Grid container spacing={3}>
        <Grid item>
          <NewButtonBase>
            {img ? <Img src={img} alt={title}/>
             : <NewBox />}    
          </NewButtonBase>
        </Grid>
            <Grid item xs color="text.primary">
              <Typography variant="body2">
                {title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 400,
                  fontSize: '46.32px',
                  lineHeight: '69.48px',
                  paddingTop:'15px',
                }}
              >
                {formattedAggregation} 
              </Typography>
            </Grid>
          </Grid>
    </NewPaper>
  );
}
