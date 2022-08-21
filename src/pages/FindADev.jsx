import React from 'react';
import '../styles/FindADev.css';

import {
  SimpleGrid, Center, Heading, Container,
} from '@chakra-ui/react';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Dev from '../Components/Dev';
import '../App.css';

function FindADev() {
  return (
    <div className="main-background">
      <Navbar />
      <Container maxWidth="auto">
        <Heading textAlign="center" fontSize="2xl" fontWeight="normal" paddingTop="2vh" maxWidth="50vw" margin="auto">
          Find PEA collaborators for your project here:
        </Heading>
      </Container>
      <Center>
        <SimpleGrid columns={3} spacing={6}>
          <Dev
            name="Eric"
            description="Funny coding ape! I fucking love JavaScript"
            tags={['javascript', 'web']}
            email="ericlmtn@gmail.com"
          />
          <Dev
            name="Eric"
            description="Funny coding ape! I fucking love JavaScript"
            tags={['javascript', 'web']}
            email="ericlmtn@gmail.com"
          />
          <Dev
            name="Eric"
            description="Funny coding ape! I fucking love JavaScript"
            tags={['javascript', 'web']}
            email="ericlmtn@gmail.com"
          />
        </SimpleGrid>
      </Center>
      <Container textAlign="center" fontSize="2xl" maxWidth="50vw" paddingTop="3vh">
        Are you a PEA developer open to working with others?
        {' '}
        <a href="https://forms.gle/xyvu47J64Vz7HNnh9" target="blank" className="gform-link">Let us know and we&lsquo;ll add you to this page!</a>
      </Container>
      <Footer />
    </div>
  );
}

export default FindADev;
