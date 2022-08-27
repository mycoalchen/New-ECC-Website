import {
  HStack,
  VStack,
  Text,
  Image,
  Link,
} from '@chakra-ui/react';
import '../App.css';
import * as React from 'react';

import discord from '../media/discord.svg';
import ig from '../media/instagram.svg';

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
        <VStack align="start" maxWidth="fit-content">
          <Text paddingBottom="2vh" paddingTop="4vh" fontWeight="semibold">© The 2022 Phillips Exeter Academy Computing Club</Text>
        </VStack>
        <HStack spacing="30px">
          <Link href="https://discord.gg/eAUk5Wvq" isExeternal>
            <Image src={discord} boxSize="35px" />
          </Link>
          <Link href="https://www.instagram.com/exetercomputingclub/" isExternal>
            <Image src={ig} boxSize="32px" />
          </Link>
        </HStack>
      </HStack>
    </div>
  );
}
