import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      typeOfEnquiry: "",
      message: "",
    },
    onSubmit: async (values, { resetForm }) => {
      await submit(values);
      onOpen(response.type, response.message);
      if (response.type === "success") {
        resetForm(); // Reset the form if successful
      }
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      typeOfEnquiry: Yup.string(),
      message: Yup.string()
        .required("Message is required.")
        .min(25, "Message must be at least 25 characters."),
    }),
  });

  return (
    <section id="Contact-section">
      <FullScreenSection
        isDarkBackground
        backgroundColor="#512DA8"
        py={16}
        spacing={8}
      >
        <VStack w="1024px" alignItems="flex-start">
          <Heading as="h1" id="contactme-section">
            Contact me
          </Heading>
          <Box p={6} rounded="md" w="100%">
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={4}>
                <FormControl
                  isInvalid={
                    formik.touched.firstName &&
                    formik.values.firstName.length < 4
                  }
                >
                  <FormLabel htmlFor="firstName">Name</FormLabel>
                  <Input
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    onBlur={formik.handleBlur}
                    id="firstName"
                    name="firstName"
                  />
                  <FormErrorMessage>Required</FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={
                    formik.touched.email && Boolean(formik.errors.email)
                  }
                >
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Input
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    id="email"
                    name="email"
                    type="email"
                  />
                  <FormErrorMessage>Invalid email</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={false}>
                  <FormLabel htmlFor="typeOfEnquiry">Type of enquiry</FormLabel>
                  <Select
                    onChange={formik.handleChange}
                    value={formik.values.typeOfEnquiry}
                    id="typeOfEnquiry"
                    name="typeOfEnquiry"
                    _focus={{ color: "black", bg: "white" }} // Change background color on focus
                  >
                    <option value="hireMe">Freelance project proposal</option>
                    <option value="openSource">
                      Open source consultancy session
                    </option>
                    <option value="other">Other</option>
                  </Select>
                </FormControl>

                <FormControl
                  isInvalid={
                    formik.touched.message && Boolean(formik.errors.message)
                  }
                >
                  <FormLabel htmlFor="message">Your message</FormLabel>
                  <Textarea
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                    id="message"
                    name="message"
                    height={250}
                  />
                  <FormErrorMessage>
                    {formik.touched.message && formik.errors.message}
                  </FormErrorMessage>
                </FormControl>

                <Button
                  type="submit"
                  onSubmit={formik.onSubmit}
                  colorScheme="purple"
                  width="full"
                >
                  {isLoading ? "Loading..." : "Submit"}
                </Button>
              </VStack>
            </form>
          </Box>
        </VStack>
      </FullScreenSection>
    </section>
  );
};

export default LandingSection;
