import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

type ISidebarDrawerContext = UseDisclosureReturn

interface ISidebarDrawerProviderPros {
    children: ReactNode
}

export const SidebarDrawerContext = createContext({ } as ISidebarDrawerContext)

export function SidebarDrawerProvider({ children }: ISidebarDrawerProviderPros) {
    const disclosure = useDisclosure()
    const { asPath } = useRouter()

    useEffect(() => {
        disclosure.onClose()
    }, [asPath])

    return (
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)