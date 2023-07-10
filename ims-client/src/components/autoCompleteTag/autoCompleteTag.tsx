import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import theme from '../../theme';
import { Chip } from '@mui/material';
import { string } from 'yargs';

//const tagOptions = ['Tag1', 'Tag2', 'Tag3', 'Tag4'];
interface tagOption{
  id:string,
  name:string
}
interface getProps {
    tagOptions: tagOption []
     }


const AutocompleteTag = ({tagOptions}:getProps) => {
  
  const [selectedTags, setSelectedTags] = useState<tagOption[]>([]);
  const handleRemoveTag = (tag: string) => {
    setSelectedTags((prevTags) => prevTags.filter((t) => t.id !== tag));
  };
  return (
    <Autocomplete ChipProps={{  clickable: true ,sx:{border:"1px solid #2F854F",color:" #2F854F",
    backgroundColor:"rgba(47, 133, 79, 0.10)",fontFamily:"Poppins",fontSize:"15px",fontStyle:"normal",
  fontWeight:"100",lineHeight:"normal",href:"#basic-chip"}}}
    
      multiple
      options={tagOptions}
      filterSelectedOptions
      value={selectedTags}
      getOptionLabel={(option) => option.name} 
      onChange={(event, newValue) => {
        setSelectedTags(newValue);
      }}
      renderTags={(values) =>
        values.map((value) => (
          <Chip
          sx={{border:"1px solid #2F854F",color:" #2F854F",
          backgroundColor:"rgba(47, 133, 79, 0.10)",fontFamily:"Poppins",fontSize:"15px",fontStyle:"normal",
        fontWeight:"100",lineHeight:"normal",href:"#basic-chip"}}
            key={value.id}
            label={value.name}
            onDelete={() => {
              handleRemoveTag(value.id);
            }}
             
          />
        ))
      }
    
    
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