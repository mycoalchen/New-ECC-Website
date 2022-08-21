import {
  HStack,
  VStack,
  Text,
  Image,
  Link,
} from '@chakra-ui/react';
import '../App.css';
import * as React from 'react';

import discord from '../media/discord.png';
import ig from '../media/instagram.png';

export default function Footer() {
  return (
    <div className="footer">
      <HStack
        bgColor="var(--pea-red)"
        textColor="white"
        paddingX="2vw"
        spacing="8"
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
      >
        <VStack align="start" maxWidth="20vw">
          <Text paddingBottom="2vh" paddingTop="4vh">© 2022 Phillips Exeter Academy Computing Club</Text>
        </VStack>
        <HStack spacing="1vw">
          <Link href="https://discord.gg/eAUk5Wvq" isExeternal>
            <Image src={discord} boxSize="3.5vw" />
          </Link>
          <Link href="https://www.instagram.com/exetercomputingclub/" isExternal>
            <Image src={ig} boxSize="3.5vw" />
          </Link>
        </HStack>
      </HStack>
    </div>
  );
}
