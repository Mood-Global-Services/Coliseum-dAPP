import {
    Button,
    Flex,
    Heading,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
import Home from '../public/images/home.png';
import Image
 from 'next/image';

  export default function SplitScreen() {
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                style={{fontFamily:"sans-serif"}}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  zIndex: -1,
                }}>
                 Unvieling A New Era
              </Text>
              <br />{' '}
              <Text id='homehead' as={'span'} style={{display:"flex",width:"60vw",color:"yellow",lineHeight:'1.1'}}>
               Discover the RWFA Dapp Revolution!
              </Text>{' '}
            </Heading>
            
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
              id='btx'
                style={{padding:"24px",borderRadius:"10px",fontSize:'20px',fontFamily:'sans-serif',fontWeight:'600px'}}
                color={'black'}
                >
               START TRADING
              </Button>
              <Button  id='sbtx' rounded={'full'}>Watch Tutorial</Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex id='homespace' flex={1}>
       <Image id='homeimg' style={{width: '100%', height: '100%', transform: 'rotate(9deg)', transformOrigin: '0 0'}}  src={Home} alt={Home} />
        </Flex>
      </Stack>
    )
  }