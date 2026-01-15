import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import AddressForm from '../components/AddressForm';

const steps = ['Información y Archivos', 'Configuración y Publicar'];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return ;
    default:
      throw new Error('Ha habido un error');
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline enableColorScheme />
      <Grid container sx={{ height: { xs: 'auto', sm: '100vh' } }}>
        <Grid
          size={{ xs: 12, sm: 5, lg: 4 }}
          sx={{
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            backgroundColor: 'background.paper',
            borderRight: { sm: 'none', md: '1px solid' },
            borderColor: { sm: 'none', md: 'divider' },
            alignItems: 'start',
            pt: 16,
            px: 10,
            gap: 4,
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, width: '100%', maxWidth: 500 }} />
        </Grid>

        <Grid
          size={{ xs: 12, md: 7, lg: 8 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '100%',
            width: '100%',
            backgroundColor: { xs: 'transparent', sm: 'background.default' },
            alignItems: 'start',
            pt: { xs: 0, sm: 16 },
            px: { xs: 2, sm: 10 },
            gap: { xs: 4, md: 8 },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: { sm: 'space-between', md: 'flex-end' },
              alignItems: 'center',
              width: '100%',
              maxWidth: { sm: '100%', md: 600 },
            }}
          >
            <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', flexGrow: 1 }}>
              <Stepper activeStep={activeStep} sx={{ width: '100%', height: 40 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Box>

          <Card sx={{ display: { xs: 'flex', md: 'none' }, width: '100%' }}>
            <CardContent sx={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <Typography variant="subtitle2" gutterBottom>Selected products</Typography>
                <Typography variant="body1">{activeStep >= 2 ? '$144.97' : '$134.98'}</Typography>
              </div>
            </CardContent>
          </Card>

          <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, width: '100%', maxWidth: 600 }}>
            <Stepper
              activeStep={activeStep}
              alternativeLabel
              sx={{ display: { xs: 'flex', md: 'none' }, mb: 4 }}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            {activeStep === steps.length ? (
              <Stack spacing={2}>
              </Stack>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: activeStep !== 0 ? 'space-between' : 'flex-end', mt: 4 }}>
                  {activeStep !== 0 && (
                    <Button startIcon={<ChevronLeftRoundedIcon />} onClick={handleBack}>
                      Previous
                    </Button>
                  )}
                  <Button variant="contained" endIcon={<ChevronRightRoundedIcon />} onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}