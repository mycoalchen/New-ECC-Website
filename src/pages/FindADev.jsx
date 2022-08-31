import React from 'react';
import '../styles/FindADev.css';

import {
  SimpleGrid, Center, Heading, Container,
} from '@chakra-ui/react';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Dev from '../Components/Dev';
import '../App.css';

import byran from '../media/byranLogo.jpeg';
import knoddy from '../media/knoddy.png';

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
        <SimpleGrid columns={[1, 1, 2, 2, 3]} spacing={6}>
          <Dev
            name="Eric"
            description="Funny coding ape! I love JavaScript"
            tags={['javascript', 'webdev']}
            email="ericlmtn@gmail.com"
          />
          <Dev
            name="Byran Huang"
            description="What's up! I create low-power wireless devices and program them. I use Linux and also do web dev, along with a few other languages."
            discord="Hello9999901#6764"
            avatarUrl={byran}
            tags={['webdev', 'javascript', 'linux', 'embedded', 'java', 'python']}
            email="byran@byran.tech"
          />
          <Dev
            name="Dongchen"
            discord="dczdajoker#0060"
            description=""
            tags={['webdev']}
            email="dzou@exeter.edu"
          />
          <Dev
            name="Nathan"
            discord="Knoddy#9995"
            description={(
              <h1 style={{
                transformOrigin: 'top',
                transform: 'scaleY(0.8) scaleX(0.9)',
              }}
              >
                I am web developer. I love to code. I love to make things. I love to make things that people use. I use React and Node.js. I am a student at Exeter University. This card was made by GitHub Copilot.
              </h1>
            )}
            avatarUrl={knoddy}
            tags={['webdev', 'javascript', 'react', 'nodejs', 'exeter', 'github', 'copilot', 'student', 'student', 'student']}
            email="cow2cow4cow@gmail.com"
            instagram={(
              <a
                style={{
                  color: 'blue',
                  textDecoration: 'underline',
                }}
                href="https://instagram.com/knoddycow"
              >
                @knoddycow
              </a>
)}
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
