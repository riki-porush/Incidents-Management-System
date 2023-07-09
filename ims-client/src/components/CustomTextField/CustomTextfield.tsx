// import { styled } from '@mui/system';
// import { TextField } from '@mui/material';


// const CustomTextField = styled(TextField)(() => ({
//   '& .MuiInputBase-root': {
//     margin: '10px 10px 10px 18px',
//     height: '50px',
//     width: '150px',
//     borderRadius: '8px',
//   },
//   '& input::-webkit-inner-spin-button, & input::-webkit-outer-spin-button': {
//     margin: 0,
//   },
//   '& input[type=number]': {
//     '-moz-appearance': 'textfield',
//   },
// }));

// export default CustomTextField;

//אני שיניתי
// import { styled } from '@mui/system';
// import { TextField } from '@mui/material';

// export const NameTextField = styled(TextField)(() => ({
//   '& .MuiInputBase-root': {
//     margin: '10px 10px 10px 18px',
//     height: '56px',
//     padding: '16px 20px',
//     display: 'flex',
//     alignItems: 'flex-start',
//     gap: '16px',
//     alignSelf: 'stretch',
//   },
//   '& input::-webkit-inner-spin-button, & input::-webkit-outer-spin-button': {
//     margin: 0,
//   },
//   '& input[type=number]': {
//     '-moz-appearance': 'textfield',
//   },
// }));

// export const DescriptionTextField = styled(TextField)(() => ({
//   '& .MuiInputBase-root': {
//     borderRadius: '10px',
//     border: '1px solid #E1E1E1',
//     background: '#FFF',
//     display: 'flex',
//     height: '206px',
//     padding: '16px 20px',
//     alignItems: 'flex-start',
//     gap: '15px',
//     alignSelf: 'stretch',
//   },
//   '& input::-webkit-inner-spin-button, & input::-webkit-outer-spin-button': {
//     margin: 0,
//   },
//   '& input[type=number]': {
//     '-moz-appearance': 'textfield',
//   },
// }));

//++++++++++++++++++++++++++++++++++=

import { styled } from '@mui/system';
import { TextField } from '@mui/material';

interface CustomTextFieldProps {
  size: 'small' | 'medium' | 'large';
}

const CustomTextField = styled(TextField)<CustomTextFieldProps>(({ size }) => ({
  '& .MuiInputBase-root': {
    margin: '10px 10px 10px 18px',
    height: size === 'small' ? '56px' : size === 'medium' ? '100px' : '150px',
    padding: '16px 20px',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    alignSelf: 'stretch',


  },
  '& input::-webkit-inner-spin-button, & input::-webkit-outer-spin-button': {
    margin: 0,
  },
  '& input[type=number]': {
    '-moz-appearance': 'textfield',
  },
}));

export default CustomTextField;

