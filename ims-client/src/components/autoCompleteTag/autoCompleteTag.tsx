import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

interface Tag{
  id: string;
  name: string;
}

interface AutocompleteTagProps{
  tagOptions: Tag[];
}

const AutocompleteTag = ({ tagOptions }: AutocompleteTagProps) => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  return (
    <Autocomplete
      ChipProps={{
        clickable: true,
        sx: {
          border: '1px solid #2F854F',
          color: '#2F854F',
          backgroundColor: 'rgba(47, 133, 79, 0.10)',
          fontFamily: 'Poppins',
          fontSize: '15px',
          fontStyle: 'normal',
          fontWeight: '100',
          lineHeight: 'normal',
        },
      }}
      multiple
      options={tagOptions}
      filterSelectedOptions
      value={selectedTags}
      getOptionLabel={(option) => option.name}
      onChange={(event, newValue) => {
        setSelectedTags(newValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Write to add"
        />
      )}
      sx={{border:"1px solid #E1E1E1",borderRadius:"10px",background:"#FFF",width: "569px"}}
    />
  );
};
export default AutocompleteTag;



