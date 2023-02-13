import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Welcome from '../welcome';
import { Grid } from '@mui/material';

const steps = [
  {
    label: 'Welcome',
    description: `Welcome`,
  },
  {
    label: 'Asset Information',
    description:
      'Asset Information',
  },
  {
    label: 'Account Type',
    description: `Account type`,
  },
  {
    label: 'Transfer Assets',
    description: `Transfer Assets`,
  },
  {
    label: 'Due Diligence',
    description: `Due Diligence`,
  },
  {
    label: 'Annual Inspections',
    description: `Annual Inspections`,
  },
  {
    label: 'Expense Allocations',
    description: `Expense Allocations`,
  },
  {
    label: 'Document Uploads & Comments',
    description: `Document Uploads & Comments`,
  },
  {
    label: 'Operations & Comments',
    description: `Operations & Comments`,
  },
  {
    label: 'Summary',
    description: `Summary`,
  }
];

export default function BTStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <>
    <div>
      <Grid container spacing={2} sx={{margin:'2rem'}}>
        <Grid item xs={6} md={2} >
            <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label} >
                <StepLabel sx={{
                  '&.MuiStepLabel-labelContainer': { fontWeight:'1000'},
                  '&.MuiStepLabel-label': {
                    '&.Mui-active': {fontWeight:'1000'},
                  }
                }}>
                  {step.label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>
        <Grid item xs={6} md={10}>
          {activeStep === 0 && (
            <Box sx={{ maxWidth: 500,  flexGrow:1}}>
                <Welcome handleStartClick={handleNext}></Welcome>
            </Box>
          )}          
        </Grid>
    </Grid>
    </div>
    </>
  );
}