import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';

const steps = [
  {
    label: 'Level 1',
    description: `Coach potato`,
  },
  {
    label: 'Level 2',
    description: 'Good student',
  },
  {
    label: 'Level 3',
    description: `Professional`,
  },
  {
    label: 'Level 4',
    description: `Native speaker`,
  },
  {
    label: 'Level 5',
    description: `Stop working man, you are crazy!`,
  },
];

const VerticalLinearStepperComponent = (props) => {

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={props.numberAttempt} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default VerticalLinearStepperComponent