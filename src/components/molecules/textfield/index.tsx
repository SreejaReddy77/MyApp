import { TextField } from "@mui/material";

const BTTextField = (props:any)=>{
    return(
        <TextField required={props.required} id={props.id} label={props.label}
            value={props.value} name={props.name} 
            onChange={props.onChange}
            error={props.error} 
            type={props.type}
            variant={props.variant} 
            helperText={props.helperText}/>
    )
}

export default BTTextField;
