import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function ContentHome() {
  const cards = Array.from({ length: 6 });
  const nameContent = ['Introducción a React', 'Diseño UI/UX Moderno', 'Marketing Digital', 'Fotografía Profesional', 'Desarrollo Web Full Stack', 'Productividad Personal'];
  const viewCounts = ['12.4k', '20.2k', '5.1k', '100k', '15.1k', '8.9k'];
  const durations = ['10:25', '05:40', '22:15', '14:02', '08:50', '30:00'];

  return (
    <Container maxWidth="lg" sx={{ marginLeft: '30%' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, py: 4 }}>
        <div>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 550, fontSize: 22 }}>
            Bienvenido a tu Dashboard
          </Typography>
          <Typography color="text.secondary">
            Explora nuestro contenido multimedia y comienza a aprender hoy mismo
          </Typography>
        </div>

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

        <Grid container spacing={1}>
          {cards.map((_, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card sx={{ maxWidth: 300 }}>
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    alt={`Imagen ${index}`}
                    height="140"
                    image={`https://picsum.photos/300/140?random=${index}`}
                  />
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
                    }}
                  >
                    {durations[index]}
                  </Box>
                </Box>
                
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '1.25rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {nameContent[index]}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                    Descripción breve del contenido multimedia disponible.
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
                    <VisibilityIcon sx={{ fontSize: 18 }} />
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {viewCounts[index]}
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}