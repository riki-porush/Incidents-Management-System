import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import * as React from 'react';

type EventProps = {
    onEvent: (functionName: string) => void;
    setSearchValue: (value: string) => void;
};

const Search: React.FC<EventProps> = ({ onEvent, setSearchValue }) => {
    const handleClick = () => {
        onEvent('someFunction');
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleClick();
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Incident"
                inputProps={{ 'aria-label': 'search incident' }}
                onKeyDown={handleKeyDown}
                onChange={handleChange}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleClick}>
                <SearchIcon />
            </IconButton>
        </Paper>
    );
};

export default Search;
