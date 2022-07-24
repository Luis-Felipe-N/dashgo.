import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

interface INavSection {
    title: string,
    children: ReactNode
}

export default function NavSection({ title, children }: INavSection) {
    return (
        <Box>
            <Text fontWeight="bold" fontSize="small" color="gray.400">{title}</Text>
            <Stack spacing="4" mt="8">
                {children}
            </Stack>
        </Box>
    )
}