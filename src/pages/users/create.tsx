import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import SideBar from "../../components/SideBar";

import Link from 'next/link'

export default function UserList() {
    return (
        <Box>
            <Header />
            <Flex
                maxW={1480}
                w="100%"
                mx="auto"
                my="6"
                px={6}
            >
                <SideBar />
                <Box
                    flex="1"
                    bg="gray.800"
                    p="6"
                    borderRadius="8"
                >
                    <Heading size="lg" fontWeight="normal">
                        Criar usuário
                    </Heading>
                    <Divider my="6" borderColor="gray.600" />  
                    <VStack spacing="8">
                        <SimpleGrid minChildWidth={240} spacing="8" w="100%">
                            <Input name="name" label="Nome do usuário" />
                            <Input name="email" type="email" label="Email" />
                        </SimpleGrid>
                        <SimpleGrid minChildWidth={240} spacing="8" w="100%">
                            <Input name="password" type="password" label="Senha" />
                            <Input name="password_confimation" type="password" label="Confirmação da senha" />
                        </SimpleGrid>
                    </VStack>
                    <Flex mt="8" justify="flex-end" >
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button
                                    colorScheme="whiteAlpha"
                                >
                                    Cancelar
                                </Button>
                            </Link>
                            <Button
                                colorScheme="pink"
                            >
                                Salvar
                            </Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}