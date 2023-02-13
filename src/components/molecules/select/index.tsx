import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const BTSelect = (props:any)=>{
  const [value, setValue] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
      setValue(event.target.value as string)
      props.onChange(event)
  }

  return (
    <Box sx={{ maxWidth: 223 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          name={props.name}
          label={props.label}
          onChange={(e) => { handleChange(e) }}
        >
          {props.data.map((ele:any, index: any) =>
                    (<MenuItem key={index} value={ele}>{ele}</MenuItem>)
                )}
        </Select>
      </FormControl>
    </Box>
  );
}

export default BTSelect;
