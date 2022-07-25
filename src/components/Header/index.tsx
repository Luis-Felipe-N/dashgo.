import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SIdebarDrawerContext";
import Logo from "./Logo";
import NotificationNav from "./NotificationNav";
import Profile from "./Profile";
import Search from "./Search";

export function Header() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    const { onOpen } = useSidebarDrawer()

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
            { !isWideVersion && (
            <IconButton 
                aria-label="Abrir navegação"
                icon={<Icon as={RiMenuLine}/>}
                variant="unstyled"
                mr="2"
                onClick={onOpen}
                fontSize="24"
            >

            </IconButton>
            )}

            <Logo />

            { isWideVersion && (<Search />)}

            <Flex 
                align="center"
                ml="auto"
            >
                <NotificationNav />
                <Profile showAllProfile={isWideVersion} /> 
            </Flex>
        </Flex>
    )
}