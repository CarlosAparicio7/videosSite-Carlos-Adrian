import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabel() {
  return (
    <FormGroup>
      <FormControlLabel sx={{marginLeft: 0.2, marginTop: 1.58}} control={<Checkbox />} label="Remember me" />
    </FormGroup>
  );
}