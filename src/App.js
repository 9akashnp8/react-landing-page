import React from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  Grid,
  Button,
  Heading,
  Highlight,
  Input,
  theme,
  Select,
  Text,
  Image,
  Link
} from '@chakra-ui/react';
import Section2 from './Section2';
import Section3 from './Section3';
import Footer from './Footer';
import logo from './img/logo.png'
import './App.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaGooglePlay, FaAppStoreIos } from 'react-icons/fa';

function Header() {
  return (
    <Box className='container' py={5}>
      <Flex align='center' justify='space-between'>
        <Image htmlWidth='160px' src={logo} alt='Lakshya Logo' />
        <Link href='tel:+919061277777'>
          <Button leftIcon={<FaPhoneAlt />} bgColor='#F83D5C' colorScheme='red' color='white' size='lg' boxShadow='md'>
            +91 9061277777
          </Button>
        </Link>
      </Flex>
    </Box>
  )
}

function RegistrationForm() {

  function handleSubmit(event) {

    event.preventDefault();

    const axios = require('axios').default;

    let payload = {
      'fullName': event.target.name.value,
      'email': event.target.email.value,
      'phone': event.target.phone.value,
      'course': event.target.course.selectedOptions[0].text
    }

    axios.post('https://j1j9nrn642.execute-api.ap-south-1.amazonaws.com/landingPageLambda', payload)
      .then(function (response) {
        console.log(response.data);
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex
        className='gradient'
        align='center' 
        direction='column'
        gap='1rem' 
        w='100%'
        p={6} 
        borderRadius='1em'
        boxShadow='md'
      >
        <Heading textAlign='center' color='white'>Or Get In Touch with our Experts!</Heading>
        <Input placeholder='full name' _placeholder={{ opacity: 1, color: 'white' }} name='name'/>
        <Input placeholder='email address' _placeholder={{ opacity: 1, color: 'white' }} name='email' />
        <Input placeholder='phone' _placeholder={{ opacity: 1, color: 'white' }} name='phone'/>
        <Select placeholder='interested course' _placeholder={{ opacity: 1, color: 'white' }} name='course'>
          <option value='1'>CA Foundation</option>
          <option value='2'>CMA Foundation</option>
          <option value='3'>CSEET</option>
        </Select>
        <Button type='submit'>Register</Button>
      </Flex>
    </form>
  )
}

function HeroHeading() {
  return (
    <Box textAlign={['center', 'center', 'center', 'left']}>
      <Heading as='h1' size={['xl', 'xl', 'xl', '3xl']} lineHeight={1.5}>
          Learn Unlimited with Lakshya Recorded Classes.
      </Heading>
      <Text as='h3' fontSize={['1.1rem']} py={5}>
        <Highlight
          query='Download the App'
          styles={{ px: '2', py: '1', color: '#F83D5C', textDecoration: 'underline', textUnderlineOffset: '.4rem'}}
        >
          Start Learning Now! Download the App & Get access to unlimited sessions.
        </Highlight>
      </Text>
      <Flex 
        mx={['auto', 'auto', 'auto', '0']}
        gap={10}
        // border='2px solid #F83D5C'
        // borderRadius='1rem'
        // p={5}
        w='max-content'>
        <Box>
          <Link href='https://play.google.com/store/apps/details?id=com.lakshya.academy'>
            <Button
              size='lg'
              boxShadow='md'
              bgColor='#F83D5C'
              colorScheme='red'
              color='white'
              leftIcon={<FaGooglePlay/>}
            >
              Android
            </Button>
          </Link>
          {/* <Image src={playstore}/>
          <Text>Android</Text> */}
        </Box>
        <Box>
          <Link href='https://apps.apple.com/in/app/lakshya/id1608662481'>
            <Button
              size='lg'
              boxShadow='md'
              bgColor='#F83D5C'
              colorScheme='red'
              color='white'
              leftIcon={<FaAppStoreIos/>}
            >
              iOS
            </Button>
          </Link>
          {/* <Image src={appstore}/>
          <Text>iOS</Text> */}
        </Box>
      </Flex>
    </Box>
  )
}

function Hero() {
  return (
    <Box 
      className='container hero-container' 
      minH={['100vh', '100vh', 'calc(100vh - 450px)', 'calc(100vh - 850px)', 'calc(100vh - 120px)']} 
      display='flex'
      pb={[5, 10, 10, 2]}
    >
      <Box display='flex'>
        <Grid 
          gap={[2, 10, 10, 2]} 
          gridAutoFlow={['row', 'row', 'row', 'column', 'column', 'column']} 
          gridAutoColumns='1fr' 
          justifyItems='end'
          alignItems='center'
          minH={['100vh', '100vh', 'calc(100vh - 450px)', 'calc(100vh - 850px)', 'calc(100vh - 120px)']}
        >
          <HeroHeading/>
          <RegistrationForm/>
        </Grid>
      </Box>
    </Box>
  )
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className='custom-background'>
        <Header/>
        <Hero/>
      </div>
      <Section2/>
      <Section3/>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
