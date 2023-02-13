import { Typography } from "@mui/material";

const BTTypography = (props:any)=>{
    return(
        <Typography variant={props.variant} component={props.component}
            required={props.required} onChange={props.onChange}
         >
            {props.children}
        </Typography>
    )
}

export default BTTypography;
