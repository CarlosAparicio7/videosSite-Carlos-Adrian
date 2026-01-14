import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
export default function ButtonLogin() {
  return (
    <Stack spacing={2} direction="row">
      <Button  variant="contained" sx={{width: 340, height: 45, backgroundColor: '#5842f4', borderRadius: '12px'}}>Sign in</Button>
    </Stack>
  );
}