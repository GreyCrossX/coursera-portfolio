import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {

  return (
    <Box maxW="420px" bg="white" p="6">
      <VStack
        backgroundColor="white"
        borderRadius="md"
        boxShadow="md"
        p={4}
        spacing={4}
        alignItems="flex-start"
      >
        <Image src={imageSrc} alt={title} borderRadius="md" />
        <VStack spacing={1} alignItems="flex-start">
          <Heading as="h2" size="md">
            {title}
          </Heading>
          <Text color="gray.600">{description}</Text>
        </VStack>
        <HStack alignSelf="flex-end">
          <Text fontSize="sm" color="gray.500">
            Learn More
          </Text>
          <a href="">
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </a>
        </HStack>
      </VStack>
    </Box>

  );
};

export default Card;