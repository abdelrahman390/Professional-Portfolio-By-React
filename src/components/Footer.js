import React from "react";
import { Box, Flex } from "@chakra-ui/react";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>Eng / Abdelrahman Elmarsafawy • © {year}</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
