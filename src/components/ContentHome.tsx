import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BarChartIcon from '@mui/icons-material/BarChart';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function ContentHome() {
  const cards = Array.from({ length: 6 });
  const nameContent = ['Introducción a React', 'Diseño UI/UX Moderno', 'Marketing Digital', 'Fotografía Profesional', 'Desarrollo Web Full Stack', 'Productividad Personal'];
  const description = ['Aprende los fundamentos de React desde cero', 'Técnicas avanzadas de diseño de interfaces', 'Estrategias efectivas para redes sociales', 'Domina tu cámara y crea imágenes increíbles', 'Construye aplicaciones web completas', 'Técnicas para maximizar tu tiempo'];
  const tagDesription = ['Programación', 'Diseño', 'Marketing', 'Fotografía', 'Programación', 'Productividad']
  const viewCounts = ['12.4k', '20.2k', '5.1k', '100k', '15.1k', '8.9k'];
  const durations = ['10:25', '05:40', '22:15', '14:02', '08:50', '30:00'];

  useEffect(() => {
    toast.success('Bienvenido de nuevo usuario');
  }, []);

  return (
    <Container maxWidth="lg" sx={{ marginLeft: '30%' }}>
      <Toaster 
        position="top-right" 
        toastOptions={{
          style: {
            background: '#25c26c',
            color: '#fff',
            borderRadius: '10px',
          },
        }} 
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, py: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Box>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 550, fontSize: 22 }}>
              Bienvenido a tu Dashboard
            </Typography>
            <Typography color="text.secondary">
              Explora nuestro contenido multimedia y comienza a aprender hoy mismo
            </Typography>
          </Box>
          <Link to="/newVideo">
          <Button 
            variant="contained" 
            startIcon={<FileUploadIcon />}
            sx={{
              backgroundColor: '#00a82d',
              borderRadius: '12px',
              textTransform: 'none',
              fontSize: '17px',
              fontWeight: 500,
              px: 3,
              py: 1.2,
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: '#008a25',
                boxShadow: 'none'
              }
            }}
          >
            Subir Video
          </Button>
          </Link>
        </Box>
        <Box sx={{ display: 'flex', gap: 1.5, overflow: 'auto', pb: 1 }}>
          {['Todos', 'Programación', 'Diseño', 'Marketing', 'Fotografia', 'Productividad'].map((label) => (
            <Chip
              key={label}
              label={label}
              onClick={() => {}}
              sx={{
                height: 40,
                px: 1,
                fontSize: '0.95rem',
                borderRadius: '20px',
                border: '1px solid #e0e0e0',
                ...(label === 'Todos'
                  ? {
                      backgroundColor: '#5842ff',
                      color: 'white',
                      borderColor: '#5842ff',
                      '&:hover': {
                        backgroundColor: '#4532cc',
                      },
                    }
                  : {
                      backgroundColor: 'white',
                      color: 'text.primary',
                      '&:hover': {
                        backgroundColor: '#f5f5f5',
                      },
                    }),
              }}
            />
          ))}
        </Box>

        <Grid container spacing={2}>
          {cards.map((_, index) => (
            <Grid key={index} size={{ md: 3 }}>
              <Card sx={{ 
                maxWidth: 300, 
                borderRadius: '20px', 
                display: 'flex', 
                flexDirection: 'column', 
                height: '100%',
                '&:hover .overlay-button': { opacity: 1 } 
              }}>
                <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: '10px', m: 0.5 }}>
                  <CardMedia
                    component="img"
                    alt={`Imagen ${index}`}
                    sx={{ borderRadius: '10px' }}
                    height="180"
                    image={`https://picsum.photos/300/180?random=${index}`}
                  />
                  <Link to="/stats">
                  <Box 
                    className="overlay-button"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(0, 0, 0, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0
                    }}
                  >
                    <Button
                      variant="text"
                      startIcon={<BarChartIcon />}
                      sx={{ color: 'white', textTransform: 'none', fontWeight: 500 }}
                    >
                      Ver Estadísticas
                    </Button>
                  </Box>
                  </Link>
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 8,
                      right: 8,
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      color: 'white',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      zIndex: 1
                    }}
                  >
                    {durations[index]}
                  </Box>
                </Box>
                
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography sx={{ 
                    display: 'inline-block',
                    backgroundColor: '#e1e2f3', 
                    color: '#4c38e4', 
                    px: 1.5, 
                    py: 0.5, 
                    borderRadius: '8px', 
                    fontSize: '14px',
                    fontWeight: 500,
                    marginBottom: 1
                  }}>
                    {tagDesription[index]}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '1.25rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontWeight: 600 }}>
                    {nameContent[index]}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, minHeight: '40px' }}>
                    {description[index]}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
                    <VisibilityIcon sx={{ fontSize: 18 }} />
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {viewCounts[index]}
                    </Typography>
                    <FavoriteBorderIcon sx={{
                      marginLeft: 'auto',
                      '&:hover': {
                        color: 'error.main',
                      }
                    }}/>
                  </Box>
                </CardContent>
                <Link to="/stats">
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button 
                    fullWidth
                    variant="contained"
                    startIcon={<BarChartIcon/>}
                    sx={{
                      backgroundColor: '#f0f2ff', 
                      color: '#4832eb', 
                      borderRadius: '12px',
                      textTransform: 'none', 
                      fontSize: '16px',
                      boxShadow: 'none',
                      py: 1,
                      '&:hover': {
                        backgroundColor: '#e5e8ff',
                        boxShadow: 'none'
                      }
                    }}
                  >
                    Ver estadísticas
                  </Button>
                </CardActions>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Button variant="contained" sx={{width: '25%', height: 55, backgroundColor: '#4832eb', borderRadius: '12px', textTransform: 'none', marginLeft: '38%', fontSize: '20px', mt: 2 }}>
          Cargar más contenido
        </Button>
      </Box>
    </Container>
  );
}