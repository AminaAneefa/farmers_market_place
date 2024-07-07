// src/components/Navbar.jsx
import React, { useContext } from 'react';
import { Box, Container, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CartContext } from '../Cart Section/CartContext';
import ShopLink from "./ShopLink";
import PagesLink from "./PagesLink";
import SearchBox from "./SearchBox";
import DrawerMenu from "./DrawerMenu";
import "./Navbar.css";
import { useEffect, useState } from "react";

function Navbar() {
  const { cartItems } = useContext(CartContext);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollThreshold = 0.1; // 10% of the window height

      setIsSticky(scrollPosition >= windowHeight * scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      position={isSticky ? "fixed" : "static"}
      top={isSticky ? "0" : "auto"}
      zIndex={1000}
      backgroundColor={isSticky ? "white" : "transparent"}
      boxShadow={isSticky ? "0px 0px 10px rgba(0, 0, 0, 0.1)" : "none"}
      transition="background-color 0.3s ease, box-shadow 0.3s ease"
      width={"100%"} min-height={"10px"}
    >
      <HStack
        wrap={["wrap", "wrap", "wrap", "nowrap"]}
        width={"100%"}
        height={"100%"}
        display={"flex"}
        justifyContent={[
          "space-evenly",
          "space-evenly",
          "space-evenly",
          "center",
        ]}
        alignItems={"center"}
        gap={["10px", "10px", "10px", "30px"]}
      >
        {/* Nav Links */}
        <HStack
          className="navLinks"
          width={"40%"}
          height={"100%"}
          justifyContent={"space-around"}
          alignItems={"center"}
          gap={"30px"}
          fontWeight={"500"}
        >
          <Link
            className="hover:text-[#5EC49D] transition-all duration-150 ease"
            to={"/"}
          >
            HOME
          </Link>
          <ShopLink />
          <PagesLink />
          <Link to={"/contact"}>CONTACT</Link>
          <Link to={"/addproducts"}>PRODUCT</Link>
        </HStack>

        <HStack
          className="drawer-icon"
          display={["block", "block", "block", "none"]}
          width={"40%"}
        >
          <DrawerMenu />
        </HStack>

        {/* Right Links */}
        <HStack
          width={["90%", "70%", "70%", "40%"]}
          height={"100%"}
          marginBottom={["30px", "30px", "30px", "0"]}
          justifyContent={"center"}
          alignItems={"center"}
          padding={"0 20px"}
          gap={"30px"}
        >
          <SearchBox />

          {/* Cart */}
          <Link to="/cart">
            <Container
              cursor={"pointer"}
              position={"relative"}
              width={"50px"}
              height={"50px"}
              display={["none", "flex", "flex", "flex"]}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"50%"}
            >
              <i className="ri-shopping-bag-2-line text-2xl text-[#5EC49D] "></i>
              <Box
                className="group"
                position={"absolute"}
                left={"25px"}
                top={"20px"}
                width={"25px"}
                height={"25px"}
                backgroundColor={"#5EC49D"}
                fontSize={"12px"}
                borderRadius={"50%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                {cartItems.length}
              </Box>
            </Container>
          </Link>

          {/* User */}
          <Link to={"/my-account"}>
            <Container
              display={["none", "flex", "flex", "flex"]}
              cursor={"pointer"}
              width={"50px"}
              height={"50px"}
              borderRadius={"50%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <i className="ri-user-3-line text-2xl text-[#5EC49D] hover:text-[#451D1D] font-medium"></i>
            </Container>
          </Link>
        </HStack>
      </HStack>
    </Box>
  );
}

export default Navbar;
