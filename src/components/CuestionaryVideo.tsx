import { Button, MenuItem, Select, type SelectChangeEvent } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function AddressForm() {
  const [opcionesElegir, setOpciones] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setOpciones(event.target.value as string);
  };

  return (
    <Grid container spacing={3}>
      <FormGrid size={{ xs: 12 }}>
        <FormLabel required sx={{ mb: 1 }}>Título del Video</FormLabel>
        <OutlinedInput
          id="address1"
          name="address1"
          placeholder="Ej: Tutorial completo de React"
          required
          size="small"
          sx={{ borderRadius: '12px' }}
        />
      </FormGrid>

      <FormGrid size={{ xs: 12 }}>
        <FormLabel required sx={{ mb: 1 }}>Descripción</FormLabel>
        <OutlinedInput
          id="address2"
          name="address2"
          placeholder="Describe tu video..."
          required
          multiline
          rows={4}
          sx={{ borderRadius: '10px' }}
        />
      </FormGrid>

      <FormGrid size={{ xs: 12 }}>
        <FormLabel required sx={{ mb: 1 }}>Categoría</FormLabel>
        <Select
          value={opcionesElegir}
          onChange={handleChange}
          sx={{ borderRadius: '12px' }}
          fullWidth
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
      </FormGrid>

      <Grid size={{ xs: 12 }} sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button 
          sx={{
            backgroundColor: '#f5f2f2', 
            color: '#4832eb',  
            borderRadius: '12px',
            fontSize: '18px',
            padding: '12px 60px',
            width: '160%',
            height: '220px',
            textTransform: 'none',
            '&:hover': { backgroundColor: '#e0e4ff' }
          }}
        >
          Haz clic para subir un video
        </Button>
      </Grid>
      <Grid size={{ xs: 12 }} sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button 
          sx={{
            backgroundColor: '#f5f2f2',
            color: '#4832eb', 
            borderRadius: '12px',
            fontSize: '18px',
            padding: '12px 60px',
            width: '160%',
            height: '160px',
            textTransform: 'none',
            '&:hover': { backgroundColor: '#e0e4ff' }
          }}
        >
          Haz clic para subir una miniatura
        </Button>
      </Grid>
    </Grid>
  );
}