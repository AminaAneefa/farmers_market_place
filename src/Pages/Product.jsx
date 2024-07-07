import React, { useState, useEffect, useContext } from 'react';
import { Box, Button, Input, Text, VStack, HStack, Image } from '@chakra-ui/react';
import { db } from '../firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { CartContext } from '../Components/Cart Section/CartContext'; // Import the CartContext

function Product() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const { addToCart } = useContext(CartContext); // Use the CartContext

  // Fetch products from Firestore
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, 'products');
        const productsSnapshot = await getDocs(productsCollection);
        const productsList = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(productsList);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);

  const addProduct = async () => {
    try {
      const newProduct = { name, description, price, image };
      await addDoc(collection(db, 'products'), newProduct);
      setProducts([...products, newProduct]);
      setName('');
      setDescription('');
      setPrice('');
      setImage('');
    } catch (error) {
      console.error("Error adding product: ", error);
    }
  };

  return (
    <Box width="100%" p={4} color="#5EA98B">
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="600">Add New Product</Text>
        <Input
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          bg="#FEEDE5"
          borderRadius="10px"
        />
        <Input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          bg="#FEEDE5"
          borderRadius="10px"
        />
        <Input
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          bg="#FEEDE5"
          borderRadius="10px"
        />
        <Input
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          bg="#FEEDE5"
          borderRadius="10px"
        />
        <Button onClick={addProduct} bg="#5EA98B" color="white" _hover={{ bg: "#FEE4D7", color: "black" }}>
          Add Product
        </Button>
      </VStack>
      <Box mt={8}>
        <Text fontSize="2xl" fontWeight="600">Products</Text>
        <VStack spacing={4}>
          {products.map((product, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="10px" bg="#FFF7F3" width="100%">
              <HStack>
                <Box flex="1">
                  <Text fontSize="xl" fontWeight="600">{product.name}</Text>
                  <Text>{product.description}</Text>
                  <Text>${product.price}</Text>
                  <Button onClick={() => addToCart(product)} bg="#5EA98B" color="white" _hover={{ bg: "#FEE4D7", color: "black" }}>
                    Add to Cart
                  </Button>
                </Box>
                <Box>
                  <Image src={product.image} alt={product.name} borderRadius="10px" width="100px" height="100px" objectFit="cover" />
                </Box>
              </HStack>
            </Box>
          ))}
        </VStack>
      </Box>
    </Box>
  );
}

export default Product;
