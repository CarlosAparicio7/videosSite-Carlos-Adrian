import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const cardData = [
  {
    img: 'https://picsum.photos/800/450?random=3',
    tag: 'Design',
    title: 'Designing for the future: trends and insights',
    description: 'Stay ahead of the curve with the latest design trends and insights.',
    authors: [{ name: 'Kate Morrison', avatar: '' }],
  },
  {
    img: 'https://picsum.photos/800/450?random=4',
    tag: 'Company',
    title: "Our company's journey: milestones and achievements",
    description: "Take a look at our company's journey and the milestones we've achieved.",
    authors: [{ name: 'Cindy Baker', avatar: '' }],
  },
  {
    img: 'https://picsum.photos/800/450?random=5',
    tag: 'Engineering',
    title: 'Pioneering sustainable engineering solutions',
    description: "Learn about our commitment to sustainability and innovative solutions.",
    authors: [{ name: 'Agnes Walker', avatar: '' }],
  },
  {
    img: 'https://picsum.photos/800/450?random=6',
    tag: 'Product',
    title: 'Maximizing efficiency with our latest product updates',
    description: 'Get a detailed overview of the new features that can elevate your workflow.',
    authors: [{ name: 'Travis Howard', avatar: '' }],
  },
];

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  height: '100%',
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
}));

const StyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: 16,
  flexGrow: 1,
});

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

function Author({ authors }: { authors: { name: string; avatar: string }[] }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center', justifyContent: 'space-between', padding: '16px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}>
        <AvatarGroup max={3}>
          {authors.map((author, index) => (
            <Avatar key={index} alt={author.name} src={author.avatar} sx={{ width: 24, height: 24 }} />
          ))}
        </AvatarGroup>
        <Typography variant="caption">{authors.map((author) => author.name).join(', ')}</Typography>
      </Box>
      <Typography variant="caption">July 14, 2021</Typography>
    </Box>
  );
}

export default function ContentHome() {
  return (
    <Container maxWidth="lg">
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

        <Grid container spacing={3}>
          {cardData.map((card, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <StyledCard variant="outlined" tabIndex={0}>
                <CardMedia
                  component="img"
                  image={card.img}
                  sx={{ aspectRatio: '16/9', borderBottom: '1px solid', borderColor: 'divider' }}
                />
                <StyledCardContent>
                  <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                    {card.tag}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    {card.title}
                  </Typography>
                  <StyledTypography variant="body2" color="text.secondary">
                    {card.description}
                  </StyledTypography>
                </StyledCardContent>
                <Author authors={card.authors} />
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}