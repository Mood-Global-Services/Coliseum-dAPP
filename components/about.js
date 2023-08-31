import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react'
  import { Box, Container } from '@mui/system';
  import Books from "../public/Frame.png";
  import ArrowDownwardSharpIcon from '@mui/icons-material/ArrowDownwardSharp';
  import Inside from '../components/inside';

  export default function SplitScreen() {
    return (
      <Stack id='aboutsection' minH={'100vh'} direction={{ base: 'column', md: 'row'}} sx={{marginBottom:'160px'}}>
        <Flex id='aboutsecond' p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
        
              <Text
              id='abouttext'
                as={'span'}
                position={'relative'}
                style={{fontFamily:"'Kanit', sans-serif",fontSize:"48px",color:"yellow",display:"flex"}}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  
                  zIndex: -1,
                }}>
                Download our White Paper for In-Depth Insigths
              </Text>
              <br />{' '}
            
         
            <Text id='aboutdes' fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'} style={{fontFamily:'sans-serif',fontSize:"28px",weight:"400",display:"flex",color:'white'}}>
            📥 Dive into the comprehensive details of the RWFA DApp by downloading our white paper. Gain a deeper understanding of the revolutionary features, innovative functionalities, and the vision that drives our project forward. Stay ahead of the curve and explore the potential that awaits. Download now and embark on a journey of knowledge and innovation. 🚀
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                
                style={{background:"yellow",padding:"15px",borderRadius:"10px",fontSize:'20px',fontWeight:'700px'}}
                color={'black'}
                fontFamily={'sans-serif'}
                fontSize={'20px'}
                fontWeight={'700px'}
                _hover={{
                  bg: 'blue.500',
                }}>
                  <ArrowDownwardSharpIcon style={{border:"3px solid black",marginRight:"10px"}} />
                DOWNLOAD WHITEPAPER
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
        <Container maxWidth={400}>
      
        <Box sx={{background: 'linear-gradient(180deg, rgba(71.19, 71.19, 71.19, 0.52) 0%, rgba(39.85, 38.85, 41.44, 0.52) 100%)', borderRadius: 11, border: '0.50px #BFBFBF solid', backdropFilter: 'blur(46px)', height: '78vh',borderRadius:'10px',margin:"75px 55px 75px 115px"}}>
        
       <Inside />
         <Text  style={{fontSize:"40px",textAlign:"center",color:"yellow"}}>
           RWFA
           
            </Text>
            <Text color={'gray.500'} style={{fontSize:"40px",textAlign:"center"}}>
           whitepaper
            </Text>
        </Box>
      </Container>
        </Flex>
      </Stack>
    )
  }