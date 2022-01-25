import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
  {
    label: 'Level 1',
    description: `Good start`,
  },
  {
    label: 'Level 2',
    description:
      'Wow, like a native',
  },
  {
    label: 'Level 3',
    description: `Relax bro, it too tough`,
  },
  {
    label: 'Level 3',
    description: `Relax bro, it too tough`,
  },
  {
    label: 'Level 3',
    description: `Relax bro, it too tough`,
  },
];

const VerticalLinearStepperComponent = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [attemptCounter, setAttemptCounter] = React.useState(0)

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
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
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
        </Paper>
      )}
    </Box>
  );
}

export default VerticalLinearStepperComponent