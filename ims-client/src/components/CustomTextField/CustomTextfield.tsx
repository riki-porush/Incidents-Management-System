import { styled } from '@mui/system';
import { TextField } from '@mui/material';


const CustomTextField = styled(TextField)(() => ({
    '& .MuiInputBase-root': {
      margin: '10px 10px 10px 18px',
      height: '50px',
      width: '150px',
      borderRadius: '8px',
    },
    '& input::-webkit-inner-spin-button, & input::-webkit-outer-spin-button': {
      margin: 0,
    },
    '& input[type=number]': {
      '-moz-appearance': 'textfield',
    },
  }));

export default CustomTextField;