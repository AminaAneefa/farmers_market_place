import React, { useContext } from 'react';
import { Box, VStack, HStack, Image, Text, Button } from '@chakra-ui/react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <Box p={4} width="100%">
      <Text fontSize="2xl" fontWeight="600" mb={4}>
        Shopping Cart
      </Text>
      {cartItems.length === 0 ? (
        <Text>Your cart is empty</Text>
      ) : (
        <VStack spacing={4} align="stretch">
          {cartItems.map((item, index) => (
            <Box
              key={index}
              p={4}
              borderWidth="1px"
              borderRadius="10px"
              bg="#FFF7F3"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <HStack>
                <Image
                  src={item.image}
                  alt={item.name}
                  borderRadius="10px"
                  width="100px"
                  height="100px"
                  objectFit="cover"
                />
                <Box>
                  <Text fontSize="xl" fontWeight="600">
                    {item.name}
                  </Text>
                  <Text>{item.description}</Text>
                  <Text>${item.price}</Text>
                </Box>
              </HStack>
              <Button
                onClick={() => handleRemoveFromCart(item)}
                bg="#5EA98B"
                color="white"
                _hover={{ bg: "#FEE4D7", color: "black" }}
              >
                Remove
              </Button>
            </Box>
          ))}
        </VStack>
      )}
      {cartItems.length > 0 && (
        <Box mt={4}>
          <Button
            onClick={handleClearCart}
            bg="#5EA98B"
            color="white"
            _hover={{ bg: "#FEE4D7", color: "black" }}
            mb={4}
          >
            Clear Cart
          </Button>
          <Link to="/checkout">
            <Button
              bg="#5EA98B"
              color="white"
              _hover={{ bg: "#FEE4D7", color: "black" }}
            >
              Proceed to Checkout
            </Button>
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default Cart;
