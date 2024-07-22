"use client";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Image,
  Input,
  Textarea,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { CircleLoader } from "react-spinners";
import { fonts } from "../font";

type FormData = {
  name: string;
  jobTitle: string;
  email: string;
  phoneNumber: string;
  industry: string;
  businessName: string;
  dateEstablished: string;
  nameExplanation: string;
  brandStory: string;
  businessPurpose: string;
  missionStatement: string;
  brandAdjectives: string;
  productsServices: string;
  businessGoals: string;
};
const BusinessForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful, isValid, errors },
  } = useForm<FormData>({ mode: "onChange" });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/inquiry-form-submission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log(
        `Form submitted successfully! File created: ${result.filename}`
      );
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const imageWidth = useBreakpointValue(
    { base: "50%", md: "50%", lg: "50%" },
    { fallback: "lg" }
  );

  const labelFontSize = useBreakpointValue({
    base: "md",
    md: "lg",
    lg: "xl",
  });

  return (
    <Flex justifyContent="center" alignItems="center" minHeight={"100dvh"}>
      <Box maxWidth="600px" margin="auto" padding={8}>
        <VStack spacing={isSubmitSuccessful ? 8 : 4} align="stretch">
          <Heading as="h1" size="2xl" textAlign="center" fontWeight={400}>
            Walk with us
          </Heading>
          {!isSubmitSuccessful && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <VStack spacing={6} align="stretch">
                <Heading as="h2" size="xl" fontWeight={400} textAlign="center">
                  Client Details
                </Heading>
                <FormControl isInvalid={!!errors.name}>
                  <FormLabel fontSize={labelFontSize} mb={1}>
                    Name
                  </FormLabel>
                  <Input {...register("name", { required: true })} />
                  <FormErrorMessage fontFamily={fonts.montserrat.variable}>
                    This field is required
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.jobTitle}>
                  <FormLabel fontSize={labelFontSize} mb={1}>
                    Job Title
                  </FormLabel>
                  <Input {...register("jobTitle", { required: true })} />
                  <FormErrorMessage fontFamily={fonts.montserrat.variable}>
                    This field is required
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.email}>
                  <FormLabel fontSize={labelFontSize} mb={1}>
                    Email Address
                  </FormLabel>
                  <Input
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                  <FormErrorMessage fontFamily={fonts.montserrat.variable}>
                    Please enter a valid email
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.phoneNumber}>
                  <FormLabel fontSize={labelFontSize} mb={1}>
                    Phone Number
                  </FormLabel>
                  <Input {...register("phoneNumber", { required: true })} />
                  <FormErrorMessage fontFamily={fonts.montserrat.variable}>
                    This field is required
                  </FormErrorMessage>
                </FormControl>

                <Heading as="h2" size="xl" fontWeight={400} textAlign="center">
                  Business Details
                </Heading>

                <FormControl isInvalid={!!errors.industry}>
                  <FormLabel fontSize={labelFontSize} mb={1}>
                    What industry is your business part of?
                  </FormLabel>
                  <Input {...register("industry", { required: true })} />
                  <FormErrorMessage fontFamily={fonts.montserrat.variable}>
                    This field is required
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.businessName}>
                  <FormLabel fontSize={labelFontSize} mb={1}>
                    What is your business name?
                  </FormLabel>
                  <Input {...register("businessName", { required: true })} />
                  <FormErrorMessage fontFamily={fonts.montserrat.variable}>
                    This field is required
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.dateEstablished}>
                  <FormLabel fontSize={labelFontSize} mb={1}>
                    Date established
                  </FormLabel>
                  <Input
                    {...register("dateEstablished", { required: true })}
                    type="date"
                  />
                  <FormErrorMessage fontFamily={fonts.montserrat.variable}>
                    This field is required
                  </FormErrorMessage>
                </FormControl>

                <Heading as="h2" size="xl" fontWeight={400} textAlign="center">
                  About Your Business
                </Heading>

                <FormControl isInvalid={!!errors.nameExplanation}>
                  <FormLabel fontSize={labelFontSize} mb={1}>
                    What is the meaning behind the name?
                  </FormLabel>
                  <Textarea
                    {...register("nameExplanation", { required: true })}
                  />
                  <FormErrorMessage fontFamily={fonts.montserrat.variable}>
                    This field is required
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.brandStory}>
                  <FormLabel fontSize={labelFontSize} mb={1}>
                    What is your brand story?
                  </FormLabel>
                  <Textarea {...register("brandStory", { required: true })} />
                  <FormErrorMessage fontFamily={fonts.montserrat.variable}>
                    This field is required
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.businessPurpose}>
                  <FormLabel fontSize={labelFontSize} mb={1}>
                    What is your business purpose?
                  </FormLabel>
                  <Textarea
                    {...register("businessPurpose", { required: true })}
                  />
                  <FormErrorMessage fontFamily={fonts.montserrat.variable}>
                    This field is required
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.missionStatement}>
                  <FormLabel fontSize={labelFontSize} mb={1}>
                    Try to sum up the goals + mission of your business in one
                    sentence.
                  </FormLabel>
                  <Textarea
                    {...register("missionStatement", { required: true })}
                  />
                  <FormErrorMessage fontFamily={fonts.montserrat.variable}>
                    This field is required
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.brandAdjectives}>
                  <FormLabel fontSize={labelFontSize} mb={1}>
                    What adjectives best describe your brand?
                  </FormLabel>
                  <Input {...register("brandAdjectives", { required: true })} />
                  <FormErrorMessage fontFamily={fonts.montserrat.variable}>
                    This field is required
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.productsServices}>
                  <FormLabel fontSize={labelFontSize} mb={1}>
                    List all the products and/or services you provide. Are there
                    any unique or distinguishing features in your
                    products/services? Which one is your core offering?
                  </FormLabel>
                  <Textarea
                    {...register("productsServices", { required: true })}
                  />
                  <FormErrorMessage fontFamily={fonts.montserrat.variable}>
                    This field is required
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.businessGoals}>
                  <FormLabel fontSize={labelFontSize} mb={1}>
                    What are a few big goals you have for your business? How do
                    you think you will expand in the future?
                  </FormLabel>
                  <Textarea
                    {...register("businessGoals", { required: true })}
                  />
                  <FormErrorMessage fontFamily={fonts.montserrat.variable}>
                    This field is required
                  </FormErrorMessage>
                </FormControl>

                <Button
                  isDisabled={!isValid || isSubmitting}
                  backgroundColor="#E0EEC6"
                  _hover={{ backgroundColor: "#c8dcb2" }}
                  type="submit"
                  size="lg"
                  width="full"
                  isLoading={isSubmitting}
                  spinner={
                    <Flex p={2}>
                      <CircleLoader color="#B89797" />
                    </Flex>
                  }
                >
                  Submit
                </Button>
              </VStack>
            </form>
          )}
          {isSubmitSuccessful && (
            <VStack alignItems="center" justifyContent="center" spacing={8}>
              <Heading as="h2" size="xl" textAlign="center" fontWeight={400}>
                Thank you for your inquiry!
              </Heading>
              <Heading as="h3" fontSize="xl" textAlign="center">
                We will get back to you as soon as possible.
              </Heading>
              <Image src="assets/logo.png" alt="flaner man" w={imageWidth} />
              <Link href="/">
                <Button
                  backgroundColor="#E0EEC6"
                  _hover={{ backgroundColor: "#c8dcb2" }}
                  size="lg"
                  width="full"
                >
                  Walk Back Home
                </Button>
              </Link>
            </VStack>
          )}
        </VStack>
      </Box>
    </Flex>
  );
};

export default function BusinessFormPage() {
  return <BusinessForm />;
}
