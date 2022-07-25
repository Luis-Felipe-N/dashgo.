import { Box, Icon, Link as ChakraLink, Text } from "@chakra-ui/react";
import { ElementType, ReactNode } from "react";
import { ActiveLink } from "../ActiveLink";

interface INavLink {
    icon: ElementType,
    children: ReactNode,
    href: string
}

export default function NavLink({ icon, children, href, ...rest }: INavLink) {
    return (
        <Box> 
            <ActiveLink href={href}>
                <ChakraLink {...rest} display="flex"  alignItems="center" gap="4">
                    <Icon fontSize={20} as={icon} />
                    <Text>{children}</Text>
                </ChakraLink>
            </ActiveLink>              
        </Box>
    )
}