import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Box } from '@mui/material';

interface WidgetProps{
  title: string;
  aggregation:number;
  img?:string;
}

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function Widget({title,aggregation,img}:WidgetProps) {
  const formattedAggregation = aggregation.toLocaleString();
  return (
      <Paper
        sx={{
          width: '464px', 
          height: '170px', 
          borderRadius: '20px',
          display: 'flex',
          paddingLeft:'40px',
          alignItems: 'center', 
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff'
        }}
      >
      <Grid container spacing={3}>
        <Grid item>
          <ButtonBase sx={{ width: 102, height: 102 }}>
            {img ? <Img src={img} alt={title}/>
             : <Box sx={{ width: 102, height: 102, borderRadius: '10px', backgroundColor: '#2F854F1A' }}/>}    
          </ButtonBase>
        </Grid>
            <Grid item xs sx={{fontFamily: 'Poppins'}} color="text.primary">
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 500,
                  fontSize: '15px',
                  lineHeight: '22.5px',
                }}
              >
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
    </Paper>
  );
}
