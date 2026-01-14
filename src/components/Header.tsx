import { NotificationsNoneOutlined } from '@mui/icons-material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const pages = ['Home', 'Explore', 'About'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      
      <AppBar 
        position="fixed" 
        sx={{ 
          width: '100%', 
          backgroundColor: 'white', 
          color: 'black', 
          boxShadow: '0px 2px 4px rgba(0,0,0,0.05)' 
        }}
      >
        <Container maxWidth="lg"> 
          <Toolbar disableGutters>
            
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 40,
                  height: 40,
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #8A2BE2 0%, #4B0082 100%)',
                  mr: 1.5
                }}
              >
                <HomeOutlinedIcon sx={{ color: 'white', fontSize: 26 }} />
              </Box>

              <Typography
                variant="h6"
                noWrap
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'Roboto, Helvetica, Arial, sans-serif', 
                  fontWeight: 500,
                  fontSize: '1.2rem',
                  color: 'black',
                  letterSpacing: '0.5px',
                  userSelect: 'none',
                  textDecoration: 'none'
                }}
              >
                MyApp
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton onClick={handleOpenNavMenu} color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography sx={{ textAlign: 'center', fontSize: '1.1rem' }}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h6"
              noWrap
              sx={{
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontWeight: 500,
                fontSize: '1.1rem',
                color: 'black',
                textAlign: 'center',
                userSelect: 'none',
                textDecoration: 'none'
              }}
            >
              MyApp
            </Typography>

            <Box sx={{ 
                flexGrow: 1, 
                display: { xs: 'none', md: 'flex' }, 
                justifyContent: 'center',
                gap: 2 
            }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ 
                    my: 2, 
                    color: 'black',
                    textTransform: 'none !important',
                    fontSize: '1.05rem',
                    fontWeight: 500,
                    '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)' }
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Box 
                  sx={{ 
                    mr: 2,
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    color: 'action.active',
                    transition: 'color 0.2s',
                    '&:hover': { 
                      color: '#1A237E',
                      '& .MuiSvgIcon-root': { color: '#1A237E' }
                    }
                  }}
                >
                    <Badge color="error" variant="dot">
                        <NotificationsNoneOutlined sx={{ fontSize: 28, transition: 'color 0.2s' }} />
                    </Badge>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <IconButton sx={{ p: 0, cursor: 'default', '&:hover': { backgroundColor: 'transparent' } }}>
                      <Avatar 
                        sx={{ 
                          width: 28, 
                          height: 28, 
                          bgcolor: '#E8EAF6', 
                          color: '#3F51B5' 
                        }}
                      >
                          <PersonOutlineIcon sx={{ fontSize: 20 }} />
                      </Avatar>
                  </IconButton>
                  <Typography 
                    sx={{ 
                      fontSize: '0.75rem', 
                      color: 'text.secondary', 
                      fontWeight: 500,
                      userSelect: 'none'
                    }}
                  >
                    Usuario
                  </Typography>
                </Box>

                <Typography
                  component="a"
                  href="/"
              sx={{
                    ml: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    color: 'text.secondary',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'color 0.2s',
                    '&:hover': {
                      color: 'error.main',
                      '& .MuiSvgIcon-root': {
                        color: 'error.main'
                      }
                    }
                  }}
                >
                  <LogoutIcon sx={{ fontSize: 20, transition: 'color 0.2s' }} />
                  Cerrar sesión
                </Typography>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}

export default Header;