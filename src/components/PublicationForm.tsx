import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function PublicationForm() {
  return (
    <Grid container spacing={3}>
      <FormGrid size={{ xs: 12 }}>
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
        <Button variant="contained" sx={{width: 200, height: 45, backgroundColor: '#5842f4', borderRadius: '12px', marginLeft: 2}}>Agregar</Button>
        </Box>
      </FormGrid>
      <FormGrid size={{ xs: 10 }}>
        <Typography sx={{ color: 'gray', mb: 1.5}}>0/10 etiquetas</Typography>
      </FormGrid>
      <FormGrid>
        <FormControl sx={{marginRight: 100}}>
          <FormLabel id="demo-radio-buttons-group-label">Visibilidad</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="publico"
            name="radio-buttons-group"
          >
          <Box sx={{border: '1px solid #d1d5db'}}>
            <FormControlLabel value="publico" control={<Radio />} label="Publico" />
          </Box>
          <FormControlLabel value="noListado" control={<Radio />} label="No listado" />
          <FormControlLabel value="privado" control={<Radio />} label="Privado" />
          </RadioGroup>
        </FormControl>
      </FormGrid>
    </Grid>
  );
}