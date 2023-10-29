import { Formik, Field } from "formik";
import {
  Box,
  Button,
  Select,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  ChakraProvider,
} from "@chakra-ui/react";
import * as yup from "yup"; // importujemy bibliotekę yup
const phoneRegexp = /^\+\d{11}$/;
const validationSchema = yup.object().shape({
  name: yup.string().min(5).required("This field is mendatory"),
  age: yup.number().min(18).max(99).required("This field is mendatory"),
  city: yup.string().min(3).required("This field is mendatory"),
  volountary: yup.boolean().required("This field is mendatory"),
  imglink: yup.string(),
  phonenumber: yup
    .string()
    .matches(
      phoneRegexp,
      "Phone number must start with a + sign and be 11 chars long"
    ),
});
export default function App() {
  return (
    <ChakraProvider>
      <Flex bg="gray.100" align="center" justify="center" h="100vh">
        <Box bg="white" p={6} rounded="md" w={64}>
          <Formik
            initialValues={{
              name: "",
              age: 0,
              city: "",
              volountary: false,
              imglink: "",
              phonenumber: 0,
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
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Field
                      as={Input}
                      id="name"
                      name="name"
                      type="text"
                      variant="filled"
                    ></Field>
                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!errors.age && touched.age}>
                    <FormLabel htmlFor="age">Age</FormLabel>
                    <Field
                      as={Input}
                      id="age"
                      name="age"
                      type="number"
                      variant="filled"
                    ></Field>
                    <FormErrorMessage>{errors.age}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!errors.city && touched.city}>
                    <FormLabel htmlFor="city">City</FormLabel>
                    <Field
                      as={Input}
                      id="city"
                      name="city"
                      type="text"
                      variant="filled"
                    ></Field>
                    <FormErrorMessage>{errors.city}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!errors.city && touched.city}>
                    <FormLabel htmlFor="volountary">Volounteer</FormLabel>
                    <Field
                      id="volountary"
                      name="volountary"
                      type="checkbox"
                    ></Field>
                    <FormErrorMessage>{errors.volountary}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!errors.imglink && touched.imglink}>
                    <FormLabel htmlFor="imglink">Img Link</FormLabel>
                    <Field
                      as={Input}
                      id="imglink"
                      name="imglink"
                      type="text"
                      variant="filled"
                    ></Field>
                    <FormErrorMessage>{errors.imglink}</FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={!!errors.phonenumber && touched.phonenumber}
                  >
                    <FormLabel htmlFor="phonenumber">Phone Number</FormLabel>
                    <Field
                      as={Input}
                      id="phonenumber"
                      name="phonenumber"
                      type="text"
                      variant="filled"
                    ></Field>
                    <FormErrorMessage>{errors.phonenumber}</FormErrorMessage>
                  </FormControl>
                  <Button type="submit" colorScheme="purple" width="full">
                    Submit!
                  </Button>
                </VStack>
              </form>
            )}
          </Formik>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}
