import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export default function Footer() {
  const lineStyle = {
    position: 'absolute',
    left: '-5000px',
    right: '-5000px',
    height: '1px',
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    zIndex: 1
  };

  return (
    <Box 
      component="footer" 
      sx={{ 
        width: '100%', 
        bgcolor: 'white', 
        position: 'relative', 
        overflow: 'visible' 
      }}
    >
      <Box sx={{ ...lineStyle, top: 0 }} />

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          width: '100%',
          py: { xs: 6, md: 10 },
          px: { xs: 3, md: 6 },
          boxSizing: 'border-box',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: { xs: 6, md: 20 }
        }}
      >
        <Box sx={{ minWidth: '250px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #8A2BE2 0%, #4B0082 100%)',
                mr: 1.5
              }}
            >
              <HomeOutlinedIcon sx={{ color: 'white', fontSize: 24 }} />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.4rem' }}>
              MyApp
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '300px', lineHeight: 1.6 }}>
            Tu plataforma de contenido multimedia favorita.
          </Typography>
        </Box>

        <Box 
          sx={{ 
            display: 'flex', 
            flex: 1, 
            justifyContent: 'center', 
            flexWrap: 'nowrap',
            gap: { xs: 8, md: 15 },
            maxWidth: '900px'
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, fontSize: '1.1rem' }}>
              Producto
            </Typography>
            <Link href="#" underline="none" color="text.secondary" sx={{ '&:hover': { color: '#8A2BE2' } }}>Características</Link>
            <Link href="#" underline="none" color="text.secondary" sx={{ '&:hover': { color: '#8A2BE2' } }}>Precios</Link>
            <Link href="#" underline="none" color="text.secondary" sx={{ '&:hover': { color: '#8A2BE2' } }}>API</Link>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, fontSize: '1.1rem' }}>
              Compañía
            </Typography>
            <Link href="#" underline="none" color="text.secondary" sx={{ '&:hover': { color: '#8A2BE2' } }}>Sobre nosotros</Link>
            <Link href="#" underline="none" color="text.secondary" sx={{ '&:hover': { color: '#8A2BE2' } }}>Blog</Link>
            <Link href="#" underline="none" color="text.secondary" sx={{ '&:hover': { color: '#8A2BE2' } }}>Contacto</Link>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, fontSize: '1.1rem' }}>
              Legal
            </Typography>
            <Link href="#" underline="none" color="text.secondary" sx={{ '&:hover': { color: '#8A2BE2' } }}>Privacidad</Link>
            <Link href="#" underline="none" color="text.secondary" sx={{ '&:hover': { color: '#8A2BE2' } }}>Términos</Link>
            <Link href="#" underline="none" color="text.secondary" sx={{ '&:hover': { color: '#8A2BE2' } }}>Cookies</Link>
          </Box>
        </Box>
      </Box>

      <Box sx={{ position: 'relative', width: '100%' }}>
        <Box sx={{ ...lineStyle, top: 0 }} />
      </Box>

      <Box sx={{ py: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="text.disabled">
          © {new Date().getFullYear()} MyApp. Todos los derechos reservados.
        </Typography>
      </Box>
    </Box>
  );
}