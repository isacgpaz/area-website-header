import { Flex, GridItem, Text } from "@chakra-ui/react";
import { CardSend, ShieldTick } from "iconsax-react";
import { RightHighLight } from "./RightHighLight";

export function Footer() {
  return (
    <GridItem
      area="footer"
      as="footer"
      display="flex"
      alignItems="center"
      gap={119}
      bg="gray.900"
      px={20}
      position="relative"
    >
      <Flex align="center" gap={5}>
        <ShieldTick size={60} color="white" variant="TwoTone" />

        <Flex direction="column">
          <Text
            color="gray.400"
            textTransform="uppercase"
            letterSpacing="-0.02em"
          >
            Waranty
          </Text>
          <Text
            color="white"
            fontWeight={700}
            fontSize="2xl"
            letterSpacing="-0.02em"
          >
            LIFETIME
          </Text>
        </Flex>
      </Flex>
      <Flex align="center" gap={5}>
        <CardSend size={60} color="white" variant="TwoTone" />

        <Flex direction="column">
          <Text
            color="gray.400"
            textTransform="uppercase"
            letterSpacing="-0.02em"
          >
            PAYMENT
          </Text>
          <Text
            color="white"
            fontWeight={700}
            fontSize="2xl"
            letterSpacing="-0.02em"
          >
            EASY & SAVE
          </Text>
        </Flex>
      </Flex>

      <RightHighLight />
    </GridItem>
  );
}
