import { Text } from "@chakra-ui/react";

export default function Logo() {
    return (
        <Text
            fontSize="3xl"
            letterSpacing="tight"
            fontWeight="bold"
        >
            Dashgo
            <Text as="span" color="pink.500">.</Text>
        </Text>
    )
}