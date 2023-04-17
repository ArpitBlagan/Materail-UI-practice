import React from 'react';
import { ToggleButton } from '@mui/material';
import {ToggleButtonGroup} from '@mui/material';
export default function ColorToggleButton() {
    const [alignment, setAlignment] = React.useState('web');
  
    const handleChange = (event,newAlignment) => {
      setAlignment(newAlignment);
      console.log(newAlignment);
    };
  
    return (
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="web">Web</ToggleButton>
        <ToggleButton value="android">Android</ToggleButton>
        <ToggleButton value="ios">iOS</ToggleButton>
      </ToggleButtonGroup>
    );
  }