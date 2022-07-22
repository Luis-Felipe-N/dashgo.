import { HStack, Icon } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

export default function NotificationNav() {
    return (
        <HStack
            spacing={8}
            mx="8"
            pr="8"
            py={8}
            color="gray.300"
            borderRightWidth={1}
            borderRightColor="gray.700"
        >
            <Icon fontSize={20} as={RiNotificationLine} />
            <Icon fontSize={20} as={RiUserAddLine} />
        </HStack>
    )
}