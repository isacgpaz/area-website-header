import { Flex, GridItem, Image, List, ListItem } from "@chakra-ui/react";
import Logo from "../assets/logo.svg";

export function Appbar() {
  return (
    <GridItem
      area="appbar"
      as="nav"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      pl={16}
      pr={20}
    >
      <Image src={Logo} />

      <Flex as={List} gap={12}>
        <ListItem
          cursor="pointer"
          textTransform="uppercase"
          textDecoration="underline"
          textDecorationLine="underline"
          textUnderlineOffset={4}
          fontSize="lg"
          letterSpacing="-0.02em"
          color="black"
          transition="color .3s"
          _hover={{
            color: "red",
          }}
        >
          Login
        </ListItem>

        <ListItem
          cursor="pointer"
          textTransform="uppercase"
          textDecoration="underline"
          textDecorationLine="underline"
          textUnderlineOffset={4}
          fontSize="lg"
          letterSpacing="-0.02em"
          color="black"
          transition="color .3s"
          _hover={{
            color: "red",
          }}
        >
          Register
        </ListItem>
      </Flex>
    </GridItem>
  );
}
