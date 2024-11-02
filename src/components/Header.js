import React, { useEffect, useRef, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookMessenger,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: abdelrahmanbo390@gmail.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/abdelrahman-walid-elmarsafawy-4b1b94223/",
  },
  {
    icon: faWhatsapp,
    url: "https://wa.me/01227986495",
  },
  {
    icon: faFacebookMessenger,
    url: "https://m.me/abdelrahman.walid390",
  },
  {
    icon: faGlobe,
    url: "https://abdelrahman390.github.io/portfolio/",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const [visible, setVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // Check scroll direction
      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }

      // Update last scroll position
      setLastScrollTop(currentScrollTop);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <header ref={headerRef}>
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        transform={visible ? "translateY(0)" : "translateY(-200%)"}
        translateY={0}
        transitionProperty="transform"
        transitionDuration=".3s"
        transitionTimingFunction="ease-in-out"
        backgroundColor="black"
      >
        <Box color="white" maxWidth="1280px" margin="0 auto">
          <HStack
            px={16}
            py={4}
            justifyContent="space-between"
            alignItems="center"
          >
            <nav width="120px" gap="4">
              <Flex gap="4">
                {socials.map(({ icon, url }, index) => (
                  <a key={index} href={url} target="_blank">
                    <Box as={FontAwesomeIcon} icon={icon} fontSize="21px" />
                  </a>
                ))}
              </Flex>
            </nav>
            <nav width="120px">
              <Flex gap="4">
                <button onClick={handleClick("Landing")}>Home</button>
                <button onClick={handleClick("Projects")}>Projects</button>
                <button onClick={handleClick("Contact")}>Contact me</button>
              </Flex>
            </nav>
          </HStack>
        </Box>
      </Box>
    </header>
  );
};
export default Header;
