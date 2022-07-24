import { Flex, Input, Text, Icon, HStack, Avatar, Box, useBreakpointValue } from "@chakra-ui/react";
import { RiSearch2Line, RiNotificationLine, RiUserAddLine } from 'react-icons/ri'
import Logo from "./Logo";
import NotificationNav from "./NotificationNav";
import Profile from "./Profile";
import Search from "./Search";

export function Header() {
    const showAllProfile = useBreakpointValue({
        base: false,
        lg: true
    })
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
            <Logo />

            <Search />

            <Flex 
                align="center"
                ml="auto"
            >
                <NotificationNav />
                <Profile showAllProfile={showAllProfile} /> 
            </Flex>
        </Flex>
    )
}