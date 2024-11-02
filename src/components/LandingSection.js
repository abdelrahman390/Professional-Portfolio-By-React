import React from "react";
import { Avatar, Box, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { Center, HStack } from "@chakra-ui/react";
import personalPhoto from "./../images/cp-picture.png";

const greeting = "Hello, I am Abdelrahman!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <section id="Landing-section">
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#2A4365"
    >
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        color="white"
        maxWidth="1280px"
        margin="0 auto"
      >
        <Avatar
          className="PersonalPhoto"
          src={personalPhoto}
          marginBottom={15}
          height={110}
          width={110}
        />
        <Heading fontSize={15}>{greeting}</Heading>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        color="white"
        fontSize="25px"
        fontWeight={500}
        textAlign="center"
        maxWidth="1280px"
        margin="0 auto"
      >
        {/* <img className="PersonalPhoto" src={personalPhoto} /> */}
        <h2>
          {bio1}
          <br />
          {bio2}
        </h2>
      </Box>
    </FullScreenSection>
  </section>
);

export default LandingSection;
