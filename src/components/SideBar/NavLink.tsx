import { Box, Icon, Link, Text } from "@chakra-ui/react";
import { ElementType, ReactNode } from "react";
import { RiDashboardLine } from "react-icons/ri";

interface INavLink {
    icon: ElementType,
    children: ReactNode
}

export default function NavLink({ icon, children, ...rest }: INavLink) {
    return (
        <Box>                
            <Link {...rest} display="flex"  alignItems="center" gap="4">
                <Icon fontSize={20} as={icon} />
                <Text>{children}</Text>
            </Link>
        </Box>
    )
}