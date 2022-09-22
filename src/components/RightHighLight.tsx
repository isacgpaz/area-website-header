import {
  Box,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { ArrowLeft, ArrowRight } from "iconsax-react";
import Image1 from "../assets/image-1.png";
import Image2 from "../assets/image-2.png";
import Product from "../assets/product.png";
import LogoLight from "../assets/logo-light.svg";

export function RightHighLight() {
  return (
    <Grid
      position="absolute"
      bottom={0}
      right={0}
      gridTemplateColumns="repeat(2, 280px)"
      gridTemplateRows="repeat(2, 280px)"
      gridTemplateAreas={`'image1 slide' 'image1 image2'`}
    >
      <GridItem gridArea="image1">
        <Image src={Image1} objectFit="cover" />
      </GridItem>

      <GridItem gridArea="slide" bg="gray.900">
        <Flex
          direction="column"
          align="center"
          justify="center"
          gap={3}
          h="100%"
          w="100%"
        >
          <Text fontWeight={600} fontSize="lg" color="white">
            DECEMBER GIVE AWAY
          </Text>

          <Box
            bg="gray.600"
            borderRadius="full"
            border="20px solid"
            borderColor="gray.700"
            position="relative"
          >
            <IconButton
              aria-label="left arrow"
              icon={<ArrowLeft />}
              position="absolute"
              variant="link"
              color="white"
              left={-50}
              top="50%"
            />

            <Image src={Product} objectFit="cover" w={32} />

            <IconButton
              aria-label="right arrow"
              icon={<ArrowRight />}
              position="absolute"
              variant="link"
              color="white"
              right={-50}
              top="50%"
            />
          </Box>

          <Text
            fontSize="xs"
            color="white"
            textTransform="uppercase"
            textDecoration={"underline"}
          >
            Ransel Genali 25L 01
          </Text>
        </Flex>
      </GridItem>

      <GridItem gridArea="image2">
        <Image src={Image2} objectFit="cover" />
      </GridItem>

      <Flex
        position="absolute"
        top={"50%"}
        left={"50%"}
        transform="translate(-50%,-50%)"
        bg="red"
        borderRadius="full"
        w={100}
        h={100}
        align="center"
        justify="center"
      >
        <Image src={LogoLight} />
      </Flex>
    </Grid>
  );
}
