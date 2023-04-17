import {useState} from 'react';
import { TextField,MenuItem,Box, Menu } from '@mui/material'
//Drop down in material ui
export const Select = () => {
    const [Country,setCountry]=useState('');
    const handle=(e)=>{
        setCountry(e.target.value);
    }
  return (
    <Box width='250px'>
        <TextField
            label='Select'
            select
            value={Country}
            onChange={handle}
            fullWidth
            // SelectProps={{
            //     multiple:true,
            // }}
            >
            <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='US'>USA</MenuItem>
            <MenuItem value='Aus'>Australia</MenuItem>
        </TextField>
    </Box>
  )
}
