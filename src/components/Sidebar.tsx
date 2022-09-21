import { GridItem, IconButton, Text } from "@chakra-ui/react";
import { HambergerMenu, ShoppingCart } from "iconsax-react";

export function Sidebar() {
  return (
    <GridItem
      area="sidebar"
      as="aside"
      bgColor="white"
      borderRight="1px solid"
      borderColor="gray.300"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      px={8}
      pt={2}
      pb={4}
    >
      <IconButton
        aria-label="Toggle sidebar"
        icon={<HambergerMenu size={28} />}
        colorScheme="whiteAlpha"
        color="gray.800"
        transition="all .3s"
        borderRadius="full"
        h="60px"
        w="60px"
        _hover={{
          bgColor: "gray.200",
        }}
      />

      <IconButton
        aria-label="Toggle sidebar"
        icon={<ShoppingCart size={24} />}
        colorScheme="whiteAlpha"
        color="gray.800"
        border="1px solid"
        borderColor="gray.200"
        borderRadius="full"
        h="60px"
        w="60px"
        transition="all .3s"
        _hover={{
          bgColor: "red",
          color: "white",
        }}
      />

      <Text
        color="gray.900"
        transform="rotate(-90deg)"
        letterSpacing={"-0.02em"}
        mb={20}
      >
        #AREIOUDOORGEAR
      </Text>
    </GridItem>
  );
}
