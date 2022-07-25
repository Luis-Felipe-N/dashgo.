import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import NavLink from "./NavLink";
import NavSection from "./NavSection";

export default function SideBarNav() {
    return (
        <Stack spacing="12"  >
                <NavSection title="GERAL">
                    <NavLink href="/dashbord" icon={RiDashboardLine}>Dashbord</NavLink>
                    <NavLink href="/users" icon={RiContactsLine}>Usuários</NavLink>
                </NavSection>
                <NavSection title="AUTOMAÇÃO">
                    <NavLink href="/form" icon={RiInputMethodLine}>Fomulário</NavLink>
                    <NavLink href="/auto" icon={RiGitMergeLine}>Automação</NavLink>
                </NavSection>
            </Stack>
    )
}