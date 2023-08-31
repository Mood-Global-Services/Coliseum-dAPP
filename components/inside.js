import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/system';
import Paper from '@mui/material/Paper';
import Books from "../public/Frame.png";
import Image
 from 'next/image';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
     
      <Container maxWidth={400}>
     
        
          



        <Box
    
    >
     
   
       
        
       
      <Image style={{margin:'90px auto',height:'33vh'}} src={Books} alt={Books} />
       
       
       
       

    </Box>


       
      </Container>
    </React.Fragment>
  );
}