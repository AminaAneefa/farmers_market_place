import {
  Box,
  Grid,
  GridItem,
  Image,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import React, { useState, useContext } from "react";
import { FaShoppingBag, FaHeart, FaShareAlt } from "react-icons/fa";
import data from "../../assets/Data";
import { CartContext } from '../Cart Section/CartContext';  // Import the CartContext

function OrganicFruitsCards() {
  const [cardStates, setCardStates] = useState(data.map(() => ({ isClicked: false, isOverlayVisible: false })));
  const { addToCart } = useContext(CartContext);  // Use the CartContext

  const changeFavIcon = (index) => {
    setCardStates(prevStates => {
      const newStates = [...prevStates];
      newStates[index].isClicked = !newStates[index].isClicked;
      return newStates;
    });
  };

  const changeOverlayVisible = (index, isVisible) => {
    setCardStates(prevStates => {
      const newStates = [...prevStates];
      newStates[index].isOverlayVisible = isVisible;
      return newStates;
    });
  };

  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap="1rem"
      width={"100%"}
      min-height={"100%"}
      overflow={"hidden"}
    >
      {data.map((item, index) => (
        <GridItem key={item.id} colSpan={1} rowSpan={1}>
          <Box
            width={"100%"}
            height={"100%"}
            overflow={"hidden"}
            marginTop={"2rem"}
            onMouseEnter={() => changeOverlayVisible(index, true)}
            onMouseLeave={() => changeOverlayVisible(index, false)}
          >
            {/* Card Items */}
            <VStack width={"100%"} alignItems={["center", "center", "center", "center", "flex-start"]}>
              {/* Card Image */}
              <HStack position={"relative"} overflow={"hidden"}>
                <Image
                  borderRadius={"20px"}
                  boxSize={"250px"}
                  src={item.itemImage}
                />

                {/* Card Overlay */}
                <HStack
                  width={"100%"}
                  height={"100px"}
                  position={"absolute"}
                  bottom={0}
                  justifyContent={'center'}
                  transition={"all 0.2s ease"}
                  {...(cardStates[index].isOverlayVisible ? { transform: "translateY(0px)" } : { transform: "translateY(100px)" })}
                >

                  {/* Shopping Bag Icon */}
                  <HStack
                    width={"40px"}
                    height={"40px"}
                    backgroundColor={"#5DA88A"}
                    borderRadius={"50%"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    color={"white"}
                    cursor={"pointer"}
                    transition={"all 0.2s linear"}
                    _hover={{
                      transform: "scale(1.1)",
                    }}
                    onClick={() => addToCart(item)}  // Add the item to the cart
                  >
                    <FaShoppingBag />
                  </HStack>

                  {/* Favourite Icon */}
                  <HStack
                    width={"40px"}
                    height={"40px"}
                    backgroundColor={"#5DA88A"}
                    borderRadius={"50%"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    color={"white"}
                    cursor={"pointer"}
                    transition={"all 0.2s linear"}
                    _hover={{
                      transform: "scale(1.1)",
                    }}
                    onClick={() => changeFavIcon(index)}
                  >
                    <FaHeart
                      className={cardStates[index].isClicked ? "text-[#FEE4D7]" : "text-white"}
                    />
                  </HStack>

                  {/* Share Icon */}
                  <HStack
                    width={"40px"}
                    height={"40px"}
                    backgroundColor={"#5DA88A"}
                    borderRadius={"50%"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    color={"white"}
                    cursor={"pointer"}
                    transition={"all 0.2s linear"}
                    _hover={{
                      transform: "scale(1.1)",
                    }}
                  >
                    <FaShareAlt />
                  </HStack>

                </HStack>
              </HStack>

              <VStack alignItems={"flex-start"}>
                <HStack>
                  <Text
                    fontWeight={"600"}
                    letterSpacing={"2px"}
                    fontSize={"20px"}
                  >
                    {" "}
                    {item.itemTitle}{" "}
                  </Text>
                </HStack>

                <HStack>
                  <Text fontWeight={700}>Rs. {item.price} </Text>
                </HStack>
              </VStack>
            </VStack> {/* This was the missing closing tag */}
          </Box>
        </GridItem>
      ))}
    </Grid>
  );
}

export default OrganicFruitsCards;
