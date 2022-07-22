import { Flex, Input, Text, Icon, HStack, Avatar, Box } from "@chakra-ui/react";
import { RiSearch2Line, RiNotificationLine, RiUserAddLine } from 'react-icons/ri'
import Logo from "./Logo";
import NotificationNav from "./NotificationNav";
import Profile from "./Profile";
import Search from "./Search";

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
            <Logo />

            <Search />

            <Flex 
                align="center"
                ml="auto"
            >
                <NotificationNav />
                <Profile /> 
            </Flex>
        </Flex>
    )
}