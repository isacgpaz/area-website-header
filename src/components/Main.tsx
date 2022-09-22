import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";

import person1 from "../assets/person-1.png";
import person2 from "../assets/person-2.png";
import person3 from "../assets/person-3.png";

export function Main() {
  return (
    <GridItem
      area="main"
      as="main"
      display="flex"
      justifyContent="space-between"
      pl={14}
      pr={20}
      pt="80px"
    >
      <Flex direction="column" justify="space-between">
        <Flex direction="column" gap={42}>
          <Heading
            fontSize={100}
            fontWeight={800}
            letterSpacing="-0.02em"
            lineHeight={0.95}
            color="gray.900"
            maxW={667}
            textTransform="uppercase"
          >
            Move and adventure
          </Heading>

          <Text
            fontSize="2xl"
            fontWeight={600}
            letterSpacing="-0.02em"
            lineHeight={0.95}
            color="gray.900"
            textTransform="uppercase"
          >
            {" "}
            Outdoor & Sporting Goods Company
          </Text>

          <Flex direction="column" gap={4}>
            <Button
              w="fit-content"
              bg="red"
              color="white"
              fontSize="sm"
              fontWeight={600}
              letterSpacing="-0.02em"
              borderRadius="none"
              px={30}
              py={26}
              transition="all .3s"
              _hover={{
                filter: "brightness(95%)",
              }}
            >
              EXPLORE MORE
            </Button>

            <Text fontWeight={300} fontSize="lg" color="gray.900">
              We have more special goods for you 🚀
            </Text>
          </Flex>
        </Flex>

        <Flex gap={94}>
          <Flex direction="column" textTransform="uppercase">
            <Text fontSize="sm" fontWeight={300}>
              More than
            </Text>

            <Text fontSize={80} fontWeight={800} lineHeight={1}>
              50+
            </Text>

            <Text fontSize="sm" fontWeight={600}>
              adventure product
            </Text>
          </Flex>

          <Flex direction="column" textTransform="uppercase">
            <Text fontSize="sm" fontWeight={300}>
              More than
            </Text>

            <Text fontSize={80} fontWeight={800} lineHeight={1}>
              75+
            </Text>

            <Text fontSize="sm" fontWeight={600}>
              OUTLET IN INDONESIA
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex direction="column" align="flex-end" gap={6}>
        <Text
          fontSize="xl"
          color="gray.500"
          textTransform="uppercase"
          letterSpacing="-0.02em"
        >
          Adventurous Person
        </Text>

        <AvatarGroup size="xl" max={3} fontSize="2xl" color="red">
          <Avatar name="Ryan Florence" src={person1} />
          <Avatar name="Segun Adebayo" src={person2} />
          <Avatar name="Kent Dodds" src={person3} />
          <Avatar name="Ryan Florence" src={person1} />
          <Avatar name="Segun Adebayo" src={person2} />
          <Avatar name="Kent Dodds" src={person3} />
          <Avatar name="Ryan Florence" src={person1} />
          <Avatar name="Segun Adebayo" src={person2} />
          <Avatar name="Kent Dodds" src={person3} />
          <Avatar name="Ryan Florence" src={person1} />
          <Avatar name="Segun Adebayo" src={person2} />
        </AvatarGroup>
      </Flex>
    </GridItem>
  );
}
