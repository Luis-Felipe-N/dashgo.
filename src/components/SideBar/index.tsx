import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

export default function SideBar() {
    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12"  >
                <Box>
                    <Text fontWeight="bold" fontSize="small" color="gray.400">GERAL</Text>
                    <Stack spacing="4" mt="8">
                        <Box>
                            <Link display="flex"  alignItems="center" gap="4">
                                <Icon fontSize={20} as={RiDashboardLine} />
                                <Text>Dashbord</Text>
                            </Link>
                        </Box>
                        <Box>
                            <Link display="flex"  alignItems="center" gap="4">
                                <Icon fontSize={20} as={RiContactsLine} />
                                <Text>Usuários</Text>
                            </Link>
                        </Box>
                    </Stack>
                </Box>
                <Box>
                    <Text fontWeight="bold" fontSize="small" color="gray.400">AUTOMAÇÃO</Text>
                    <Stack spacing="4" mt="8">
                        <Box>
                            <Link display="flex"  alignItems="center" gap="4">
                                <Icon fontSize={20} as={RiInputMethodLine} />
                                <Text>Fomulário</Text>
                            </Link>
                        </Box>
                        <Box>
                            <Link display="flex"  alignItems="center" gap="4">
                                <Icon fontSize={20} as={RiGitMergeLine} />
                                <Text>Automação</Text>
                            </Link>
                        </Box>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}

