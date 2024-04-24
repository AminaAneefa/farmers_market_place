import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react'
import React from 'react'

function FaqDrawer() {
  return (
    <Accordion allowToggle width={'100%'} gap={'1rem'} display={'flex'} flexDirection={'column'} marginTop={'4rem'} >
  <AccordionItem
  
  >
    <h2>
      <AccordionButton
      
      bg={'#5DA88A'}
      height={'4rem'}
      color={'white'}
      _hover={{bg: '#5DA88A'}}
      >
        <Box as="span" flex='1' textAlign='left' fontSize={['14px' , '14px' , '14px' , '14px' , '20px']}>
          How will my order be delivered to me?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    </AccordionPanel>
  </AccordionItem>


  <AccordionItem
  
  >
    <h2>
      <AccordionButton
      
      bg={'#5DA88A'}
      height={'4rem'}
      color={'white'}
      _hover={{bg: '#5DA88A'}}
      >
        <Box as="span" flex='1' textAlign='left' fontSize={['14px' , '14px' , '14px' , '14px' , '20px']}>
          What do i need to know?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
     
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem
  
  >
    <h2>
      <AccordionButton
      
      bg={'#5DA88A'}
      height={'4rem'}
      color={'white'}
      _hover={{bg: '#5DA88A'}}
      >
        <Box as="span" flex='1' textAlign='left' fontSize={['14px' , '14px' , '14px' , '14px' , '20px']}>
          How will i know  if oprder is placed successfully?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>

    </AccordionPanel>
  </AccordionItem>

  <AccordionItem
  
  >
    <h2>
      <AccordionButton
      
      bg={'#5DA88A'}
      height={'4rem'}
      color={'white'}
      _hover={{bg: '#5DA88A'}}
      >
        <Box as="span" flex='1' textAlign='left' fontSize={['14px' , '14px' , '14px' , '14px' , '20px']}>
          How do i check the status of my order?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>

    </AccordionPanel>
  </AccordionItem>
 
  <AccordionItem
  
  >
    <h2>
      <AccordionButton
      
      bg={'#5DA88A'}
      height={'4rem'}
      color={'white'}
      _hover={{bg: '#5DA88A'}}
      >
        <Box as="span" flex='1' textAlign='left' fontSize={['14px' , '14px' , '14px' , '14px' , '20px']}>
        Can i cancel my order?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>

    </AccordionPanel>
  </AccordionItem>
 

  <AccordionItem
  
  >
    <h2>
      <AccordionButton
      
      bg={'#5DA88A'}
      height={'4rem'}
      color={'white'}
      _hover={{bg: '#5DA88A'}}
      >
        <Box as="span" flex='1' textAlign='left' fontSize={['14px' , '14px' , '14px' , '14px' , '20px']}>
        What are the shipping charges?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>

    </AccordionPanel>
  </AccordionItem>

  <AccordionItem
  
  >
    <h2>
      <AccordionButton
      
      bg={'#5DA88A'}
      height={'4rem'}
      color={'white'}
      _hover={{bg: '#5DA88A'}}
      >
        <Box as="span" flex='1' textAlign='left' fontSize={['14px' , '14px' , '14px' , '14px' , '20px']}>
        Do you allow exchanges?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
.
    </AccordionPanel>
  </AccordionItem>

</Accordion>
  )
}

export default FaqDrawer
