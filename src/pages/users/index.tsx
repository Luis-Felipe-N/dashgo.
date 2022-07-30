import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Th, Thead, Tr, Text, Td, useBreakpointValue, Spinner, useRadio } from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import Link from 'next/link'

import { Header } from "../../components/Header";
import Pagination from "../../components/Pagination/Index";
import SideBar from "../../components/SideBar";

import { IUser } from "../../types/Users";
import { useUsers } from "../../hooks/useUsers";


export default function UserList() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    const { isLoading, isFetching, data, error } = useUsers()

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
                    <Flex
                        justify="space-between"
                        align="center"
                    >
                        <Heading 
                            size="lg"
                            fontWeight="normal"
                        >
                            Usuários
                            { !isLoading && isFetching && (
                                <Spinner size="sm" ml="4" />
                            )}
                        </Heading>
                        <Link href="/users/create" passHref>
                            <Button
                                as="a"
                                colorScheme="pink"
                                leftIcon={<Icon as={RiAddLine} />}
                            >
                                Criar novo
                            </Button>
                        </Link>
                    </Flex>
                    {
                        isLoading ? (
                            <Flex justify="center">
                                <Spinner />
                            </Flex>
                        ) : error  ? (
                            <Flex>
                                <Text>Não foi possível obter dados</Text>
                            </Flex>
                        ) : data ? (
                            <>
                                <Table colorScheme="whiteAlpha">
                                    <Thead>
                                        <Tr>
                                            <Th px="6">
                                                <Checkbox colorScheme="pink"  />
                                            </Th>
                                            <Th>
                                                Usuários
                                            </Th>
                                        { isWideVersion && ( <Th>
                                                Data de cadastro
                                            </Th>)}
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        { data.map((user: IUser) => (
                                            <Tr key={user.id}>
                                                <Td px="6" color="gray.300" width="8">
                                                    <Checkbox colorScheme="pink"  />
                                                </Td>
                                                <Td>
                                                    <Box>
                                                        <Text fontWeight="bold">
                                                            { user.name }
                                                        </Text>
                                                        <Text
                                                            color="gray.300"
                                                            fontSize="sm"
                                                        >
                                                            { user.email }
                                                        </Text>
                                                    </Box>
                                                </Td>
                                            { isWideVersion && ( <Td>
                                                    { user.createdAt }
                                                </Td>)}
                                            </Tr>
                                        )) }
                                    </Tbody>
                                </Table>
                            </>
                        ) : (
                            <h1>Sem usuários</h1>
                        )
                    }
                    <Pagination />
                </Box>
            </Flex>
        </Box>
    )
}