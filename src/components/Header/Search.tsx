import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearch2Line } from "react-icons/ri";

export default function Search() {
    return (
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
    )
}