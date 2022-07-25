import { 
    Box, 
    useBreakpointValue,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton, } from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contexts/SIdebarDrawerContext";
import SideBarNav from "./SideBarNav";

export default function SideBar() {
    const isDrawerMenu = useBreakpointValue({
        base: true,
        lg: false
    })

    const { onClose, isOpen } = useSidebarDrawer()

    if ( isDrawerMenu ) {
        return (
            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                placement="left"
            >
                <DrawerOverlay />
                <DrawerContent bg="gray.800">
                    <DrawerCloseButton
                    />
                    <DrawerHeader>Navegação</DrawerHeader>
                    <DrawerBody>
                    <SideBarNav />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        )
    }

    return (
        <Box as="aside" w="64" mr="8">
            <SideBarNav />
        </Box>
    )
}

