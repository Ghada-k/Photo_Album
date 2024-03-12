
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Button from '@mui/material/Button';
// import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, Grid, Toolbar, Container} from '@mui/material/Button';
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, Grid, Toolbar, Container, CssBaseline } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Data from  './Data.json'
import { CardActionArea } from '@mui/material';


function App() {
  return (
    
    <>
    <AppBar position='relative'>
      <Toolbar>
        <PhotoCamera />
        <Typography variant="h6">Photo Album</Typography>
      </Toolbar>
    </AppBar>
    <main>
      <div >
        <Container maxWidth="sm" style={{marginTop: '100px'}}>
          <Typography variant='h2' align='center' color='textPrimary' gutterBottom>Photo Album</Typography>
          <Typography variant='h5' align='center' color='textSecondary' paragraph>As a professional products photographer, I am thrilled to present you with a collection of my finest work. Each photograph captures the essence and beauty of the products I have had the pleasure of photographing.</Typography>
          <div>
            <Grid container spacing={2} justifyContent={'center'}>
              <Grid item>
                <Button variant='contained' color='primary'>
                  See photos
                </Button>
              </Grid>
              <Grid item>
                <Button variant='outlined' color='primary'>
                  Contact me
                </Button>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={5} style={{marginTop:'20px'}}>
            {Data.map((result,index)=>(
              <Grid item xs={20} sm={6} ms={6} key={index}>
                 <Card sx={{ maxWidth: 800 }} style={{padding:'10px', marginBottom:"30px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={result.img}
          alt="green iguana"
          style={{borderRadius:"10px"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
              </Grid>
            ))}
              
            </Grid>
          </div>
        </Container>
      </div>
    </main>
    </>
    
  )
}

export default App
