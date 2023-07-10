import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
 


 

interface Tag {
  id: string,
  name: string
}
interface getProps {
  tagOptions: Tag[]
}
const AutocompleteTag = ({ tagOptions }: getProps) => {
  //const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
 
  return (
    
    //   value={selectedTags}
    //   // onChange={(event, newValue) => {
    //   //   setSelectedTags(newValue);
    //   // }}
    //   // renderTags={(values) =>
    //   //   values.map((value) => (
    //     //   <Chip
    //     //     sx={{
    //     //       border: "1px solid #2F854F", color: " #2F854F",
    //     //       backgroundColor: "rgba(47, 133, 79, 0.10)", fontFamily: "Poppins", fontSize: "15px", fontStyle: "normal",
    //     //       fontWeight: "100", lineHeight: "normal", href: "#basic-chip"
    //     //     }}
    //     //     key={value.id}
    //     //     label={value.name}
    //     //     onDelete={() => {
    //     //       handleRemoveTag(value.id);
    //     //     }}
    //     //   />
    //   //    ))
    //   // }
    
    <Autocomplete multiple 
      ChipProps={{  sx:{border: "1px solid #2F854F", color: " #2F854F",
                       backgroundColor: "rgba(47, 133, 79, 0.10)", fontFamily: "Poppins", 
                       fontSize: "15px", fontStyle: "normal",
                       fontWeight: "100", lineHeight: "normal",
                      }
                 }}
      options={tagOptions}
      getOptionLabel={(option) => option.name}
      filterSelectedOptions
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
 
 
 