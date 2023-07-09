import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from 'react';

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState<string | null>('left');
  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    setAlignment(newAlignment);
  };
  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      style={{ display: 'flex', gap: '10px' }}
    >
      <ToggleButton value="left">
        p0      </ToggleButton>
      <ToggleButton value="center">
        p1
      </ToggleButton>
      <ToggleButton value="right">
        p2
      </ToggleButton>
      <ToggleButton value="justify">
        p3
      </ToggleButton>
    </ToggleButtonGroup>
  );
}