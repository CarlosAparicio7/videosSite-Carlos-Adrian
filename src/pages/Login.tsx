import LockIcon from '@mui/icons-material/Lock';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import OutlinedInput from '@mui/material/OutlinedInput';

export default function Login() {
  return (
    <Box 
      sx={{ 
        display: 'flex',           
        justifyContent: 'center',   
        alignItems: 'center',      
        minHeight: '100vh',       
        width: '100vw',            
        backgroundColor: '#E9F0FF' 
      }}
    >
    <Card sx={{ minWidth: 275, 
                display: 'flex',
                flexDirection: 'column', 
                alignItems: 'center',
                textAlign: 'center',
                borderRadius: '12px'}}>
      <CardContent>
          <br/>
        <LockIcon fontSize="large"></LockIcon>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 20 }}>
          Welcome Back
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5}}>Sign in to your account to continue</Typography>
        <Typography variant="body2" marginRight={31} marginTop={2.5}>
          Email Address 
          <br />
        </Typography>
        
        <OutlinedInput  type='email' placeholder='you@example.com' required sx={{width: 345}}></OutlinedInput>

        <Typography variant="body2" marginRight={35} marginTop={2.5}>
          Password
          <br />
        </Typography>
        <OutlinedInput type='password' placeholder='Enter your password' required sx={{width: 345}}></OutlinedInput>
        <Box
          display={'flex'}
        >
        <FormGroup>
            <FormControlLabel sx={{marginLeft: 0.2, marginTop: 1.58}} control={<Checkbox />} label="Remember me" />
        </FormGroup>
        <Typography variant="body2" marginLeft={9} marginTop={3} color='#5842f4'>
          Forgot password?
        </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Link to="/home">
        <Button variant="contained" sx={{width: 340, height: 45, backgroundColor: '#5842f4', borderRadius: '12px'}}>Sign in</Button>
        </Link>
      </CardActions>
      <br/>
    </Card>
    </Box>
  );
}