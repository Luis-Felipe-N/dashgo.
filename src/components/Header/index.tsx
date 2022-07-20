import { Flex, Input, Text, Icon, HStack, Avatar, Box } from "@chakra-ui/react";
import { RiSearch2Line, RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

export function Header() {
    return (
        <Flex 
            as="header"
            width="100%"
            h="20"
            mx="auto"
            px="6"
            mt="4"
            maxWidth={1480}
            align="center"
        >
            <Text
                fontSize="3xl"
                letterSpacing="tight"
                fontWeight="bold"
            >
                Dashgo
                <Text as="span" color="pink.500">.</Text>
            </Text>

            <Flex
                as="label"
                bg="gray.800"
                flex={1}
                maxW={400}
                borderRadius="full"
                px="6"
                py="4"
                ml="8"
                align="center"
                alignSelf="center"
            >
                <Input 
                    variant="unstyled"
                    color="gray.50"
                    placeholder="Busca na plataforma"
                    _placeholder={{
                        color: 'gray.500'
                    }}
                />
                <Icon fontSize="20" as={RiSearch2Line} />
            </Flex>

            <Flex 
                align="center"
                ml="auto"
            >
                <HStack
                    spacing={8}
                    mx="8"
                    pr="8"
                    py={8}
                    color="gray.300"
                    borderRightWidth={1}
                    borderRightColor="gray.700"
                >
                    <Icon fontSize={20} as={RiNotificationLine} />
                    <Icon fontSize={20} as={RiUserAddLine} />
                </HStack>
                <Flex align="center">
                <Box mr="4" textAlign="right">
                    <Text>Luis Felipe Nunes de Carvalho</Text>
                    <Text color="gray.300" fontSize="small">luisj2felipe09@gmail.com</Text>

                </Box>
                    <Avatar size="md" name="Luis Felipe" />

                </Flex>
            </Flex>
        </Flex>
    )
}