import { Button } from "@chakra-ui/react"

interface IPaginationItem {
    disabled?: boolean,
    number: number
}

export default function PaginationItem({ number, disabled }: IPaginationItem) {
    if( disabled ){
        return (
            <Button
            size="sm"
            fontSize="sm"
            w="4"
            colorScheme="pink"
            disabled
            _disabled={{
                bg: 'pink.500',
                cursor: 'default'
            }}
        >
            {number}
        </Button>
        )

    } else {
        return (
            <Button
            size="sm"
            fontSize="sm"
            w="4"
            bg="gray.700"
            _hover={{
                bg: 'gray.500'
            }}
        >
            {number}
        </Button>
        )
    }
}