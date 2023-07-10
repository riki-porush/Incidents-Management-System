import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import theme from '../../theme';

//const tagOptions = ['Tag1', 'Tag2', 'Tag3', 'Tag4'];

interface getProps {
    tagOptions: string []
}
const AutocompleteTag = ({tagOptions}:getProps) => {
  return (
    <Autocomplete
      multiple
      options={tagOptions}
      filterSelectedOptions
      renderInput={(params) => (
        <TextField 
        //to remove x
        //-webkit-appearance: none;
        //add color
        //size input
          {...params}
          
          placeholder="Write to add"
        />
      )}
      
    />
  );
};

export default AutocompleteTag;