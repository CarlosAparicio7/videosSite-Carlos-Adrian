import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function PublicationForm() {
  return (
    <Grid container spacing={3}>
      <FormGrid size={{ xs: 50 }}>
        <FormLabel htmlFor="etiquetas">
          Etiquetas
        </FormLabel>
        <Box display={'flex'}>
        <OutlinedInput sx={{width: 1200, borderRadius: '12px'}}
          id="etiquetas"
          name="etiquetas"
          type="etiquetas"
          placeholder="Escribe una etiqueta y presiona Enter"
          size="small"
        />
        <Button component={Link} to="/home" variant="contained" sx={{width: 200, height: 45, backgroundColor: '#5842f4', borderRadius: '12px', marginLeft: 2}}>Agregar</Button>
        </Box>
      </FormGrid>
      <FormGrid size={{ xs: 10 }}>
        <Typography sx={{ color: 'gray', mb: 1.5}}>0/10 etiquetas</Typography>
      </FormGrid>
    </Grid>
  );
}