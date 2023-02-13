import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import BTTypography from '../../atoms/typography';
import BTButton from '../../molecules/button';
import BTSelect from '../../molecules/select';
import BTTextField from '../../molecules/textfield';


const Welcome =(props:any)=>{

    const assetTypeData =["Real Estate", "Closely Held","Promissory","Etc"]
    const assetActoinData =["Add","Remove","Transfer"]

    const [accountInfo,setAccountInfo] = useState({
        accountNumber: '',
        accountName: '',
        assetType: '',
        assetAction: ''
    });

    const [isAccountNumberInvalid,setIsAccountNumberInvalid] = useState(false)

    const handleChange = (event: any) =>{
        setAccountInfo({ ...accountInfo, [event.target.name]: event.target.value });
    }

    const handleSubmit = () =>{
        if(accountInfo.accountNumber.length!=9){
                setIsAccountNumberInvalid(true)
        }
        else{
                console.log(accountInfo);    
                props.handleStartClick();
        }
    }

    return(
        <Box sx={{ width: '100%' }}>
                <Grid container justifyContent={"center"}>
                        <BTTypography variant={"h5"}  >Baird Trust Special Assets</BTTypography>
                </Grid>
                <br/><br/><br/>

                <Grid container direction="column"  justifyContent="space-between" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={10}>
                        <Grid container direction="row" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item xs={5}>
                                        <BTTypography variant={"string"}>Account Number</BTTypography>
                                </Grid>
                                <Grid item xs={5}>
                                        <BTTextField type={"text"} required={true} name={"accountNumber"}
                                        label={"Account Number"}
                                        error={isAccountNumberInvalid}
                                        helperText={isAccountNumberInvalid?"Account Number should be 9 characters":""}
                                        value={accountInfo.accountNumber} onChange={handleChange}></BTTextField>
                                </Grid>
                        </Grid>
                </Grid>
                <Grid item xs={10}>
                        <Grid container direction="row" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item xs={5}>
                                        <BTTypography variant={"string"}>Account Name</BTTypography>
                                </Grid>
                                <Grid item xs={5}>
                                        <BTTextField  type={"text"}  required={true} name={"accountName"}
                                        value={accountInfo.accountName} onChange={handleChange}></BTTextField>
                                </Grid>
                        </Grid>
                </Grid>
                <Grid item xs={10}>
                        <Grid container direction="row" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item xs={5}>
                                        <BTTypography variant={"string"}>Asset Type</BTTypography>
                                </Grid>
                                <Grid item xs={4}>
                                        <BTSelect label={"Asset Type"} data={assetTypeData} name={"assetType"}
                                        onChange={handleChange}></BTSelect>
                                </Grid>
                        </Grid>
                </Grid>
                <Grid item xs={10}>
                        <Grid container direction="row" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item xs={5}>
                                        <BTTypography variant={"string"}>Asset Action</BTTypography>
                                </Grid>
                                <Grid item xs={4}>
                                <BTSelect label={"Asset Action"} data={assetActoinData} name={"assetAction"}
                                onChange={handleChange}></BTSelect>
                                </Grid>
                        </Grid>
                </Grid>
                </Grid>
                <br/> <br/> <br/>
                <Grid container direction="row" justifyContent="flex-end" >
                        <Grid item >
                                <BTButton  
                                variant={"outlined"} onClick={handleSubmit}>Start</BTButton>
                        </Grid>
                </Grid>
        </Box>
    )
}

export default Welcome;
