import React from 'react';

import {
  SimpleGrid, Center, Heading, Container,
} from '@chakra-ui/react';

import Navbar from '../Components/Navbar';
import Dev from '../Components/Dev';
import '../App.css';

function FindADev() {
  return (
    <>
      <Navbar />

      <Container maxWidth="auto">
        <Heading>
          Here you can find aspiring, excellent, and motivated developers
          (Totally legit!)
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

      <Container textAlign="center">
        Also a dev?
        {' '}
        <a href="https://forms.gle/INSERTLINKHERE">Let us know and we&lsquo;ll add you to this page!</a>
      </Container>
    </>
  );
}

export default FindADev;
