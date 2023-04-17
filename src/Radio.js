import React, { useState } from 'react'
import { Box,FormControl,Radio,RadioGroup,FormControlLabel, FormLabel } from '@mui/material'
export default function() {
    const [val,setVal]=useState('');
    const handle=(e)=>{
        console.log(e.target.value);
        setVal(e.target.value);
    }
  return (
    <Box>
        <FormControl>
            <FormLabel id='job'>
                Years of experience
            </FormLabel>
            <RadioGroup
                name=''
                value={val}
                onChange={handle}
            >
                <FormControlLabel control={<Radio/>} label='0-2' value='0-2'/>
                <FormControlLabel control={<Radio/>} label='3-5' value='3-5'/>
                <FormControlLabel control={<Radio/>} label='6-8' value='6-8'/>
            </RadioGroup>
        </FormControl>
    </Box>
  )
}
