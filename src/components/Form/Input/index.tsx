import { FormControl, FormErrorMessage, FormLabel, Input as InputChakra, InputProps } from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'

interface IInputProps extends InputProps {
    name: string,
    label?: string,
    error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInputProps> = ({label, name, error, ...rest}: IInputProps, ref) => {
    return (
        <FormControl isInvalid={!!error}>
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
          
          {!!error && (
            <FormErrorMessage>
              {error.message}
            </FormErrorMessage>
          )}
        </FormControl>
    )
}

export const Input = forwardRef(InputBase)