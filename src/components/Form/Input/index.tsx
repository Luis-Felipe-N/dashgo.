import { FormControl, FormLabel, Input as InputChakra, InputProps } from '@chakra-ui/react'

interface IInputProps extends InputProps {
    name: string,
    label?: string
}

export function Input({label, name, ...rest}: IInputProps) {
    return (
        <FormControl>
          { label  && <FormLabel htmlFor={name}>{label}</FormLabel>}
          <InputChakra
            id={name}
            name={name} 
            bg="gray.900"
            variant="filled"
            focusBorderColor="pink.500"
            _hover={{
              bg: "gray.900"
            }}
            size="lg"
            {...rest}
          />
        </FormControl>
    )
}