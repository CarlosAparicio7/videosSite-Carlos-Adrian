import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
export default function ButtonLogin() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" sx={{width: 230}}>Sign in</Button>
    </Stack>
  );
}