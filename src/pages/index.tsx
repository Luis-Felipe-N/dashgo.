import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Button, Flex, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

const Home: NextPage = () => {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius="8px"
        flexDir="column"
      >
        <Stack spacing={4}>
        <Input
          label="Email"
          name="email"
          type="email"
        />
        
        <Input
          name="password"
          label="Senha"
          type="password"
        />
        </Stack>
        <Button
          colorScheme="pink"
          mt="6"
        > 
          Entrar</Button>
      </Flex>
    </Flex>
  )
}

export default Home
