'use client'

import { Box, Container, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import Logo from '../public/logo.png';
import Image from 'next/image';
export default function SmallWithNavigation() {
  return (
    <div style={{background:'black',padding:'70px',marginBottom:'40px'}}>
      <Image style={{borderRadius:'100px',display:'flex',alignItems:'center',justifyContent:'center',margin:'auto'}} src={Logo} alt='' />
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
          <Box as="a" href={'#'}  sx={{fontFamily:'sans-serif',color:'white',fontSize:'20px'}}  >
            HOME
          </Box>
          <Box as="a" href={'#'}  sx={{fontFamily:'sans-serif',color:'white',fontSize:'20px'}} >
            ABOUT
          </Box>
          <Box as="a" href={'#'}  sx={{fontFamily:'sans-serif',color:'white',fontSize:'20px'}} >
            BLOG
          </Box>
          <Box as="a" href={'#'}  sx={{fontFamily:'sans-serif',color:'white',fontSize:'20px'}} >
            CONTACT
          </Box>
        </Stack>
      
      </Container>
    </Box>
    <Text  sx={{paddingTop:'30px',fontFamily:'sans-serif',color:'white',fontSize:'20px',display:'flex',alignItems:'center',justifyContent:'center'}}  >Media inquires for CMax - Contact media@cmax.com
</Text>
    <Text  sx={{fontFamily:'sans-serif',color:'white',fontSize:'20px',display:'flex',alignItems:'center',justifyContent:'center'  }}  >Copy Right 2023 - CMax. All Rights Reserved</Text>


    </div>
  )
}