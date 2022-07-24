import { Text } from "@chakra-ui/react";

export default function Logo() {
    return (
        <Text
            fontSize={["2xl", "3xl"]}
            letterSpacing="tight"
            fontWeight="bold"
            w="64"
        >
            Dashgo
            <Text as="span" color="pink.500">.</Text>
        </Text>
    )
}