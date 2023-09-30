'use client'

import { Box, Container, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import Logo from '../public/logs.png';
import Image from 'next/image';

import Tradei from '../public/montra.png';
import Stakei from '../public/mobst.png';
import Abouti from '../public/mobab.png';
import Termi from '../public/termi.png';
import Copyright from '../public/crr.png';


export default function SmallWithNavigation() {
  return (
    <div className='foot'>
      <Image  style={{borderRadius:'100px',display:'flex',alignItems:'center',justifyContent:'center',margin:'auto'}} src={Logo} alt='' />
    <Box
      
      sx={{color:'white'}}>
      <Container
        as={Stack}
        paddingTop={'50px'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Stack direction={'row'} spacing={6}>
          <Box as="a" href={'/'}  sx={{fontFamily:'sans-serif',color:'white',fontSize:'20px'}}  >
            <Image style={{width:'60px'}} src={Tradei} alt='' />
          </Box>
          <Box as="a" href={'/about'}  sx={{fontFamily:'sans-serif',color:'white',fontSize:'20px'}} >
          <Image style={{width:'60px'}} src={Abouti} alt='' />
          </Box>
          <Box as="a" href={'/stake'}  sx={{fontFamily:'sans-serif',color:'white',fontSize:'20px'}} >
          <Image style={{width:'60px'}} src={Stakei} alt='' />
          </Box>
          <Box as="a" href={'/stake'}  sx={{fontFamily:'sans-serif',color:'white',fontSize:'20px'}} >
          <Image style={{width:'176px'}} src={Termi} alt='' />
          </Box>
        </Stack>
      
      </Container>
    </Box>
   
    <Text  sx={{fontFamily:'sans-serif',color:'white',fontSize:'15px',display:'flex',alignItems:'center',justifyContent:'center',marginTop:"30px"  }}  >
      <Image style={{width:"50%"}} src={Copyright} alt='' />
       </Text>


    </div>
  )
}