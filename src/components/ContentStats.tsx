import { Card, Grid, Typography } from '@mui/material';
import { ArcElement, BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Tooltip } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const pieChart1 = {
  labels: ['Búsqueda 35%', 'Sugeridos 28%', 'Directo 20%', 'Redes Sociales 12%', 'Otros 5%'],
  datasets: [
    {
      data: [35, 28, 20, 12, 5],
      backgroundColor: ['#6366f1', '#8b5cf6', '#ec4899', '#14b8a6', '#f59e0b'],
      borderWidth: 2,
      borderColor: '#ffffff',
    },
  ],
};

const pieChart2 = {
  labels: ['Móvil 58%', 'Desktop 32%', 'Tablet 10%'],
  datasets: [
    {
      data: [58, 32, 10],
      backgroundColor: ['#6366f1', '#8b5cf6', '#ec4899'],
      borderWidth: 2,
      borderColor: '#ffffff',
    },
  ],
};

const barChartData = {
  labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
  datasets: [
    {
      label: 'Vistas',
      data: [4200, 5800, 7200, 6500, 8900, 12500, 10300],
      backgroundColor: '#6366f1',
      borderRadius: 8,
    },
  ],
};
export default function ContentStats() {
  return (
    <>
    <Grid sx={{display: 'flex', marginLeft: '580px'}}>
        <Card sx={{ 
            maxWidth: 300, 
            borderRadius: '20px', 
            display: 'flex', 
            flexDirection: 'column', 
            height: '100%',
            '&:hover .overlay-button': { opacity: 1 }
        }}>
        <Typography sx={{fontSize: '25px'}}>Fuentes de Tráfico</Typography>
        <Grid style={{ maxWidth: '400px', margin: '0 auto' }}>
        <Doughnut data={pieChart1}/>
        </Grid>
        </Card>

        <Card sx={{ 
            maxWidth: 300, 
            borderRadius: '20px', 
            display: 'flex', 
            flexDirection: 'column', 
            height: '100%',
            '&:hover .overlay-button': { opacity: 1 }
        }}>
        <Typography sx={{fontSize: '25px'}}>Dispositivos</Typography>
        <Grid style={{ maxWidth: '400px', margin: '0 auto' }}>
        <Doughnut data={pieChart2}/>
        </Grid>
        </Card>
    </Grid>
    <Grid>
          <Card sx={{ 
            maxWidth: 400, 
            borderRadius: '20px', 
            display: 'flex', 
            flexDirection: 'column', 
            height: '400%',
            marginBottom: 5,
            marginTop: 5,
            marginLeft: 85,
            '&:hover .overlay-button': { opacity: 1 }
        }}>
        <Typography sx={{fontSize: '25px'}}>Vistas por Día</Typography>
        <Grid style={{ maxWidth: '400px', margin: '0 auto' }}>
          <Bar data={barChartData} />
        </Grid>
        </Card>
    </Grid>    
    </>
  );
}