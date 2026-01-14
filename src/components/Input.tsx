import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';

export default function Inputs() {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1 } }}
      noValidate
      autoComplete="off"
    >
      <OutlinedInput 
          placeholder="you@example.com" 
          fullWidth 
          sx={{ 
            mb: 3,
            width: 342,
            borderRadius: '12px',
            backgroundColor: '#fff',
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#1976d2', 
            }
          }} 
        />
    </Box>
  );
}