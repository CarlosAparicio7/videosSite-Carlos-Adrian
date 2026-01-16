import { Box, Button, CardActions, InputLabel, MenuItem, Select, type SelectChangeEvent } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import React from 'react';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function AddressForm() {

  const [opcionesElegir, setOpciones] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setOpciones(event.target.value as string);
  };

  return (
    <Grid container spacing={3}>
      <FormGrid size={{ xs: 12 }}>
        <FormLabel required>
          Título del Video
        </FormLabel>
        <OutlinedInput
          id="address1"
          name="address1"
          type="address1"
          placeholder="Ej: Tutorial completo de React"
          required
          size="small"
          sx={{borderRadius: '12px'}}
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormLabel required>Descripción</FormLabel>
        <OutlinedInput
          id="address2"
          name="address2"
          type="address2"
          placeholder="Describe tu video..."
          required
          size="small"
          sx={{height: '130px',
              borderRadius: '10px',
              alignItems: 'flex-start',
              '& .MuiInputBase-input': {
              paddingTop: '12px',
            }}}
        />
      </FormGrid>
          <Box sx={{ minWidth: 120 }}>
            <InputLabel>Categoria *</InputLabel>
            <Select
              value={opcionesElegir}
              onChange={handleChange}
              sx={{width: '867%', height: '50%'}}
            >
              <MenuItem value={"programacion"}>Programación</MenuItem>
              <MenuItem value={"diseño"}>Diseño</MenuItem>
              <MenuItem value={"marketing"}>Marketing</MenuItem>
              <MenuItem value={"fotografia"}>Fotografia</MenuItem>
              <MenuItem value={"musica"}>Musica</MenuItem>
              <MenuItem value={"educacion"}>Educacion</MenuItem>
              <MenuItem value={"entretenimiento"}>Entretenimiento</MenuItem>
              <MenuItem value={"deportes"}>Deportes</MenuItem>
              <MenuItem value={"noticias"}>Noticias</MenuItem>
            </Select>
          </Box>
            <CardActions sx={{marginTop: '30%'}}>
              <Button 
                sx={{
                  backgroundColor: '#f0f2ff', 
                  color: '#4832eb', 
                  borderRadius: '12px',
                  fontSize: '16px',
                }}
              >
                Ver estadísticas
              </Button>
            </CardActions>
    </Grid>
  );
}