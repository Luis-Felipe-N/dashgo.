import { Flex, Button, Stack, Box } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from "../components/Form/Input";

interface SignInFormProps {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("O campo precisa ser um email válido"),
  password: yup.string().required("Senha obrigatória")
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm<SignInFormProps>();

  const handleSignIn: SubmitHandler<SignInFormProps> = async data => {
    console.log(data);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            label="E-mail"
            type="email"
            {...register("email")}
            error={formState.errors.email?.message}
            />
          <Input
            label="Senha"
            type="password"
            {...register("password")}
            error={formState.errors.password?.message}
          />
        </Stack>
        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}