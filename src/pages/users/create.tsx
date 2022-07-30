import Link from 'next/link'

import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import SideBar from "../../components/SideBar";

interface CreateUserFormProps {
    name: string;
    email: string;
    password: string;
    password_confimation: string
}

const createUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    email: yup.string().required("E-mail obrigatório").email("O campo precisa ser um email válido"),
    password: yup.string().required("Senha obrigatória").min(6, 'Senha de no minímo 6 caracteres'),
    password_confimation: yup.string().oneOf([null, yup.ref('password')], 'As senhas não batem')
});

export default function UserList() {
    const { register, handleSubmit, formState } = useForm<CreateUserFormProps>({
        resolver: yupResolver(createUserFormSchema)
    })

    const handleCreateUser: SubmitHandler<CreateUserFormProps> = async data => {
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log(data)
    }

    return (
        <Box>
            <Header />
            <Flex
                maxW={1480}
                w="100%"
                mx="auto"
                my="6"
                px={6}
            >
                <SideBar />
                <Box
                    flex="1"
                    bg="gray.800"
                    p="6"
                    borderRadius="8"
                    as="form"
                    onSubmit={handleSubmit(handleCreateUser)}
                >
                    <Heading size="lg" fontWeight="normal">
                        Criar usuário
                    </Heading>
                    <Divider my="6" borderColor="gray.600" />  
                    <VStack spacing="8">
                        <SimpleGrid minChildWidth={240} spacing="8" w="100%">
                           <Input
                              {...register("name")}
                              error={formState.errors.name?.message}
                              name="name"
                              label="Nome do usuário"
                              />
                            <Input
                              {...register("email")}
                              error={formState.errors.email?.message}
                              name="email"
                              type="email"
                              label="Email"
                              />
                        </SimpleGrid>
                        <SimpleGrid minChildWidth={240} spacing="8" w="100%">
                            <Input
                              {...register("password")}
                              error={formState.errors.password?.message}
                              name="password"
                              type="password"
                              label="Senha"
                              />
                            <Input
                              {...register("password_confimation")}
                              error={formState.errors.password_confimation?.message}
                              name="password_confimation"
                              type="password"
                              label="Confirmação da senha" />
                        </SimpleGrid>
                    </VStack>
                    <Flex mt="8" justify="flex-end" >
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button
                                    colorScheme="whiteAlpha"
                                >
                                    Cancelar
                                </Button>
                            </Link>
                            <Button
                                colorScheme="pink"
                                type="submit"
                                isLoading={formState.isSubmitting}
                            >
                                Salvar
                            </Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}