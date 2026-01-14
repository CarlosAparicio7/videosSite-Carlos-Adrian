import LockIcon from '@mui/icons-material/Lock';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ButtonLogin from './ButtonLogin';
import Input from './Input';
import InputPassword from './InputPassword';




export default function BasicCard() {
  return (
    <Box 
      sx={{ 
        display: 'flex',           
        justifyContent: 'center',   
        alignItems: 'center',      
        minHeight: '100vh',       
        width: '100vw',            
        backgroundColor: '#cce5e7' 
      }}
    >
    <Card sx={{ minWidth: 275, 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                textAlign: 'center',
                borderRadius: '12px'}}>
      <CardContent>
        <LockIcon fontSize="large"></LockIcon>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 20 }}>
          Welcome Back
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5}}>Sign in to your account to continue</Typography>
        <Typography variant="body2" marginRight={31} marginTop={2.5}>
          Email Address 
          <br />
        </Typography>
        <Input></Input>
        <Typography variant="body2" marginRight={35} marginTop={2.5}>
          Password
          <br />
        </Typography>
        <InputPassword></InputPassword>
      </CardContent>
      <CardActions>
        <ButtonLogin/>
      </CardActions>
      <br/>
    </Card>
    </Box>
  );
}