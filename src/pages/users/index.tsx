import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Th, Thead, Tr, Text, Td, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import Pagination from "../../components/Pagination/Index";
import SideBar from "../../components/SideBar";

export default function UserList() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })
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
                        </Heading>
                        <Button
                            as="a"
                            colorScheme="pink"
                            leftIcon={<Icon as={RiAddLine} />}
                        >
                            Criar novo
                        </Button>
                    </Flex>
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
                            <Tr>
                                <Td px="6" color="gray.300" width="8">
                                    <Checkbox colorScheme="pink"  />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">
                                            Luis Felipe Nunes de Carvalho
                                        </Text>
                                        <Text
                                            color="gray.300"
                                            fontSize="sm"
                                        >
                                            luisj2felipe09@gmail.com
                                        </Text>
                                    </Box>
                                </Td>
                               { isWideVersion && ( <Td>
                                    22 de julho
                                </Td>)}
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination />
                </Box>
            </Flex>
        </Box>
    )
}