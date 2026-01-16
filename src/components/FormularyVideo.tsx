import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import Typography from '@mui/material/Typography';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import CheckIcon from '@mui/icons-material/Check';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CuestionaryVideo from '../components/CuestionaryVideo';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import PublicationForm from './PublicationForm';

const steps = ['Información y Archivos', 'Configuración y Publicar'];

const ColorlibConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 40,
    left: 'calc(-20%)',
    right: 'calc(80%)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: '#25c26e',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: '#25c26e',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 4,
    border: 0,
    backgroundColor: '#e0e0e0',
    borderRadius: 1,
  },
}));

function ColorlibStepIcon(props: any) {
  const { active, completed, icon } = props;

  const isStepOneCompleted = icon === 1 && completed;

  const icons: { [index: string]: React.ReactElement } = {
    1: isStepOneCompleted ? (
      <CheckIcon sx={{ fontSize: 40 }} />
    ) : (
      <FileUploadOutlinedIcon sx={{ fontSize: 32 }} />
    ),
    2: <CheckIcon sx={{ fontSize: 40 }} />,
  };

  return (
    <Box
      sx={{
        backgroundColor: isStepOneCompleted ? '#25c26e' : (active || completed ? '#5842ff' : '#e0e0e0'),
        zIndex: 1,
        color: '#fff',
        width: 80,
        height: 80,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: active ? '0 0 20px rgba(88, 66, 255, 0.3)' : 'none',
      }}
    >
      {icons[String(icon)]}
    </Box>
  );
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return (
        <Box sx={{ mt: 6 }}>
          <CuestionaryVideo />
        </Box>
      );
    case 1:
      return (
        <Box sx={{ mt: 6 }}>
          <PublicationForm/>
        </Box>
      );
    default:
      throw new Error('Error');
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => setActiveStep(activeStep - 1);

  return (
    <Box sx={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginLeft: '-60%',
      marginRight: '-120%'
    }}>
      <CssBaseline />
      
      <Box sx={{ width: '100%', maxWidth: 1200, p: 5, display: 'flex', alignItems: 'center', gap: 2 }}>
        <ArrowBackIcon sx={{ fontSize: 28 }} />
        <Link to="/home">
          <Typography sx={{ fontWeight: 600, fontSize: '1.3rem' }}>Cancelar</Typography>
        </Link>
      </Box>

      <Box sx={{ 
        width: '95%', 
        maxWidth: 1200,
        backgroundColor: 'white', 
        borderRadius: '40px', 
        p: { xs: 6, md: 10 },
        boxShadow: '0px 15px 50px rgba(0,0,0,0.05)',
        mb: 10
      }}>
        
        <Box sx={{ mb: 10 }}>
          <Stepper 
            activeStep={activeStep} 
            alternativeLabel 
            connector={<ColorlibConnector />}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel 
                  StepIconComponent={ColorlibStepIcon}
                  sx={{
                    '& .MuiStepLabel-label': { 
                      mt: 3, 
                      fontWeight: 700,
                      fontSize: '1.4rem',
                      color: activeStep >= steps.indexOf(label) ? 'text.primary' : 'text.disabled'
                    } 
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        <Box sx={{ minHeight: '400px' }}>
          {getStepContent(activeStep)}
        </Box>
        
        <Box sx={{ 
          display: 'flex', 
          justifyContent: activeStep !== 0 ? 'space-between' : 'flex-end', 
          mt: 10,
          pt: 5,
          borderTop: '2px solid #f5f5f5'
        }}>
          {activeStep !== 0 && (
            <Button 
              onClick={handleBack}
              startIcon={<ChevronLeftRoundedIcon sx={{ fontSize: 30 }} />}
            sx={{
              backgroundColor: '#3a28c4',
              borderRadius: '20px',
              textTransform: 'none',
              px: 8,
              py: 2.5,
              fontSize: '1.3rem',
              fontWeight: 700,
              color: '#ffffff',
            }}
            >
              Anterior
            </Button>
          )}

          {activeStep == 0 && (
            <Button 
              onClick={handleBack}
              startIcon={<ChevronLeftRoundedIcon sx={{ fontSize: 30 }} />}
            sx={{
              backgroundColor: '#e7e6f0',
              borderRadius: '20px',
              textTransform: 'none',
              px: 8,
              py: 2.5,
              fontSize: '1.3rem',
              fontWeight: 700,
              color: '#cfcddb',
              marginRight: '52%'
            }}
            >
              Anterior
            </Button>
          )}
          <Button 
            variant="contained" 
            onClick={handleNext}
            sx={{
              backgroundColor: '#3a28c4',
              borderRadius: '20px',
              textTransform: 'none',
              px: 8,
              py: 2.5,
              fontSize: '1.3rem',
              fontWeight: 700,
              boxShadow: '0 10px 25px rgba(72, 50, 235, 0.25)',
              '&:hover': { 
                backgroundColor: '#3a28c4', 
                boxShadow: '0 12px 30px rgba(72, 50, 235, 0.35)' 
              }
            }}
          >
            {activeStep === steps.length - 1 ? 'Finalizar y Publicar' : 'Siguiente'}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}