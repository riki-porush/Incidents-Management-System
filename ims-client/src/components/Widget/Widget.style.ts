import { styled } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase';

export const NewPaper = styled(Paper)(({ theme }) => ({
    ' &': {
        'width': '464px',
        'height': '170px',
        'borderRadius': '20px',
        'display': 'flex',
        'paddingLeft':'40px',
        'alignItems': 'center'
    }
}))

export const NewBox= styled(Box)(({ theme }) => ({
    ' &': {
        'width': '102',
        'height': '102',
        'borderRadius': '10px',
        'backgroundColor': theme.palette.secondary.light
    }
}))

export const NewButtonBase= styled(ButtonBase)(({ theme }) => ({
    ' &': {
        'width': '102',
        'height': '102'
    }
}))

export const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});
