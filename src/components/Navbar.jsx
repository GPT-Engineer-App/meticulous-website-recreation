import { Box, Flex, IconButton, Input, Link, Spacer, Text } from "@chakra-ui/react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.100" p={4}>
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold">
          Logo
        </Text>
        <Spacer />
        <Flex>
          <Link as={RouterLink} to="/mobler" mx={2}>
            Möbler
          </Link>
          <Link as={RouterLink} to="/sangar" mx={2}>
            Sängar
          </Link>
          <Link as={RouterLink} to="/sovrum" mx={2}>
            Sovrum
          </Link>
          <Link as={RouterLink} to="/belysning" mx={2}>
            Belysning
          </Link>
          <Link as={RouterLink} to="/inredning" mx={2}>
            Inredning
          </Link>
          <Link as={RouterLink} to="/varumarken" mx={2}>
            Varumärken
          </Link>
        </Flex>
        <Spacer />
        <Input placeholder="Search" width="200px" mx={2} />
        <IconButton aria-label="Inspiration" icon={<FaHeart />} mx={2} />
        <IconButton aria-label="Butiker" icon={<FaHeart />} mx={2} />
        <IconButton aria-label="Wishlist" icon={<FaHeart />} mx={2} />
        <IconButton aria-label="Shopping Cart" icon={<FaShoppingCart />} mx={2} />
      </Flex>
    </Box>
  );
};

export default Navbar;