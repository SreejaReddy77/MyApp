import Button from '@mui/material/Button';

const BTButton = (props:any)=>{
    return(
        <Button variant={props.variant} onClick={props.onClick} sx={{'&.MuiButton-root':
         {color:'black',border:'1px solid black'}}}
        >{props.children}</Button>
    )
}

export default BTButton;
