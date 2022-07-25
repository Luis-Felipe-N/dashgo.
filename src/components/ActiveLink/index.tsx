import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ILinkProps extends LinkProps {
    children: ReactElement,
    shouldExactHref?: boolean
}

export function ActiveLink({children, shouldExactHref = false, ...rest}: ILinkProps) {
    let isActive = false
    const {asPath} = useRouter()

    if (shouldExactHref && (rest.href === asPath || rest.as === asPath)) {
        isActive = true
    }

    if (
        !shouldExactHref && (
            asPath.startsWith(String(rest.href)) || 
            asPath.startsWith(String(rest.as))
            )
        ) {
        isActive = true
    }

    return (
        <Link {...rest}>
            {cloneElement(children, {
                color: isActive ? 'pink.500' : 'gray.50'
            })}
        </Link>
    )
}