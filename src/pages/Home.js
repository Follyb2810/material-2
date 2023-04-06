import React from 'react'

import { Container, Grid, Typography } from '@mui/material';


import TourCard from '../component/TourCard';
import city from '../data.json'
const Home = () => {
  return (
    <>
   
    <Container sx={{marginY:5 }}>
      {
        city.map((v,i)=>(
          <>
          <Typography variant='h4' component='h2' marginTop={3} marginBottom={2} key={i}>{v.name} Tours</Typography>
          <Grid container spacing={5}>
             {v.tours.map((v,i)=> <TourCard tour={v} key={i}/>  )}
          </Grid>
          </>
          ))
      }
      {/* <Grid  container spacing={5}>

      <TourCard/> 
      </Grid> */}
    </Container>
    </>
  )
}

export default Home
