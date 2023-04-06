import React from 'react'
import { createTheme,ThemeProvider ,Grid, Paper, Rating, Typography } from '@mui/material'
import { Box } from '@mui/system'
import {AccessTime} from '@mui/icons-material';

const theme=createTheme({
  components:{
    MuiTypography:{
      variants:[
        {
          props:{variant:'body2'},
          style:{fontSize: 11,},
        },
        {
          props:{variant:'body3'},
          style:{fontSize:9,},
        },
    ]
    }
  }
})
const TourCard = ({tour}) => {
  const [value, setValue] = React.useState(3.5);
  // const val=setValue(()=> value);
  return (
    <Grid item xs={3 }>
      <ThemeProvider theme={theme}>
        <Paper elevation={3} square >
            <img src={tour.image} className='img' alt='l'/>
            {/* <img src={require('../k.jpg')} className='img' alt='l'/> */}
            <Box paddingX={1}>

                 <Typography variant='subtittle1' component='h2'> folly at {tour.name}</Typography>
                <Box  sx={{display:'flex',alignItems:'center'}}>
                        <AccessTime sx={{width:12.5}}/>
                    <Typography variant='body2'marginLeft={0.5} component='p'>
                        {/* <Button variant='secondary' startIcon={<AccessTime/>}>hi</Button> */}
                        {tour.duration} hour</Typography>

                </Box>
                <Box sx={{display:'flex',alignItems:'center',marginTop:3}}>
                    <Rating
                    name='read-only'
                    value={tour.rating}
                    readOnly
                    precision={0.5}
                    size='small '
                    />
                    <Typography variant='body2'marginLeft={0.5} component='p'>{tour.rating} </Typography>
                    <Typography variant='body3'marginLeft={1.5} component='p'>{tour.numberOfReviews} Reviews </Typography>     
                </Box>
                <Box>
                    <Typography variant='h6'marginTop={0} component='h3'>From C ${tour.price} </Typography>
                </Box>
            </Box>
        </Paper>
        </ThemeProvider>
    </Grid>
  )
}

export default TourCard
