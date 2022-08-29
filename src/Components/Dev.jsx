import React from 'react';

import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Dev({
  avatarUrl,
  name,
  instagram,
  discord,
  description,
  tags,
  email,
}) {
  return (
    <Center py={6}>
      <Box
        maxW="360px"
        w="full"
        h="500px"
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow="2xl"
        rounded="lg"
        p={6}
        textAlign="center"
        transition="0.15s"
        _hover={{
          transform: 'scale(1.015)',
        }}
      >
        <Avatar
          size="xl"
          src={avatarUrl}
          name={name}
          alt="Avatar Alt"
          mb={4}
          pos="relative"
        />
        <Heading fontSize="2xl" fontFamily="body">
          {/* Firstname Lastname */}
          {name}
        </Heading>
        <Text fontWeight={600} color="gray.500" mt={2} mb={0}>
          {/* Instagram */}
          {instagram || 'No Instagram'}
        </Text>
        <Text fontWeight={600} color="gray.500" mb={2}>
          {/* Discord */}
          {discord === undefined ? 'No Discord' : `Discord: ${discord}`}
        </Text>
        <Text
          textAlign="center"
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}
          h="90px"
        >
          {description}
        </Text>

        <Stack align="center" justify="center" flexWrap="wrap" direction="row" mt={6} h="12">
          {tags.map((tag) => (
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight="400"
            >
              {tag}
            </Badge>
          ))}
        </Stack>
        <Stack mt={8} direction="row" spacing={4}>
          <Button
            flex={1}
            fontSize="sm"
            rounded="full"
            bg="blue.400"
            color="white"
            boxShadow="0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}
            onClick={() => {
              window.open(`mailto:${email}`);
            }}
          >
            Email
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
