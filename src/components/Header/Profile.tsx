import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export default function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Luis Felipe Nunes de Carvalho</Text>
                <Text color="gray.300" fontSize="small">luisj2felipe09@gmail.com</Text>

            </Box>
            <Avatar size="md" name="Luis Felipe" />

        </Flex>
    )
}