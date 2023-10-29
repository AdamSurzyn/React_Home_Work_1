import React from "react";
import { Formik, Field } from "formik";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  ChakraProvider,
} from "@chakra-ui/react";
import * as yup from "yup"; // importujemy bibliotekę yup
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]){5,}$/;
const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "The name must be at least 3 characters long")
    .required("Required"),
  lastName: yup
    .string()
    .min(2, "The last name must be at least 2 characters long")
    .required("Required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .matches(/[0-9]/, "Password must contain at least one digit")
    .matches(/[a-z]/, "Password must contain at least one lower case letter")
    .matches(/[A-Z]/, "Password must contain at least one upper case letter")
    .required("Required"),

  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Required"),
});
const FakeRegister = () => {
  return (
    <ChakraProvider>
      <Flex bg="gray.100" align="center" justify="center" h="100vh">
        <Box bg="white" p={6} rounded="md" w={64}>
          <Formik
            initialValues={{
              name: "",
              lastName: "",
              password: "",
              repeatPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {({ handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="flex-start">
                  <FormControl isInvalid={!!errors.name && touched.name}>
                    <FormLabel htmlFor="name">First Name</FormLabel>
                    <Field
                      as={Input}
                      id="name"
                      name="name"
                      type="text"
                      variant="filled"
                    ></Field>
                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={!!errors.lastName && touched.lastName}
                  >
                    <FormLabel htmlFor="lastName">Last Name</FormLabel>
                    <Field
                      as={Input}
                      id="lastName"
                      name="lastName"
                      type="text"
                      variant="filled"
                    ></Field>
                    <FormErrorMessage>{errors.lastName}</FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={!!errors.password && touched.password}
                  >
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Field
                      as={Input}
                      id="password"
                      name="password"
                      type="password"
                      variant="filled"
                    ></Field>
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={
                      !!errors.repeatPassword && touched.repeatPassword
                    }
                  >
                    <FormLabel htmlFor="repeatPassword">
                      Repeat Password
                    </FormLabel>
                    <Field
                      as={Input}
                      id="repeatPassword"
                      name="repeatPassword"
                      type="password"
                      variant="filled"
                    ></Field>
                    <FormErrorMessage>{errors.repeatPassword}</FormErrorMessage>
                  </FormControl>
                </VStack>
              </form>
            )}
          </Formik>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default FakeRegister;
