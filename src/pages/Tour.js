import { Box, Container, Typography,Paper,BottomNavigation } from '@mui/material'
import React from 'react'
import CustomizedAccordions from '../component/Accordion'
import ImageCollage from '../component/ImageCollage'
import BasicModal from '../component/Modal'

const Tour = () => {
  return (
    <Container sx={{width:900}}>
      <Typography variant='h3' component='h1' marginTop={2}>Explore the world</Typography>
        <Box marginTop={3} sx={{display:'flex'}}>
            <img src={require('../k.jpg')} alt='' height={400}/>
            <ImageCollage/>
        </Box>
        <Box>
            <Typography variant='h6' component='h4' marginTop={2}>About the ticket</Typography>
            <Typography variant='paragraph' component='p' marginTop={2}>lorem   </Typography>
        </Box>
        <Box marginBottom={10}>
        <Typography variant='h6' component='h4'marginBottom={2} marginTop={2}>Frequently Ask Question</Typography>
        <CustomizedAccordions/>
      </Box>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation showLabels>
            <BasicModal/>
        </BottomNavigation>
      </Paper>
    </Container>
  )
}

export default Tour
