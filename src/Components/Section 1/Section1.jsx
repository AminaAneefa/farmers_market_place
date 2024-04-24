import { Box, HStack } from '@chakra-ui/react'
import Section1Card from './Section1Card'

import Image1 from '../../assets/Section 1 Card 1 Image.png'
import Image2 from '../../assets/Section 1 Card 2 Image.png'
import Image3 from '../../assets/Section 1 Card 3 Image.png'
import Image4 from '../../assets/Section 1 Card 4 Image.png'

function Section1() {
  return (
    <Box
    width={'100%'}
    min-height={'100vh'}
    // backgroundColor={'red'}
    >
     
     {/* Section 1 Cards */}
     <HStack justifyContent={'center'} alignItems={'center'} height={'100%'} flexWrap={'wrap'}>
      <Section1Card cardImage={Image1}  cardNumber={'01'} cardTitle={'No Pesticides'} cardText={"Enjoy peace of mind knowing that our produce is grown without the use of harmful pesticides"}/>
      <Section1Card cardImage={Image2}  cardNumber={'02'} cardTitle={'Organic Products'} cardText={"Discover the essence of freshness with our handpicked selection of organic delights at the farmer's market."}/>
      <Section1Card cardImage={Image3}  cardNumber={'03'} cardTitle={'Fresh Eatables'} cardText={"Explore the vibrant selection of locally sourced fruits, vegetables, and dairy products in our Fresh Eatables section."}/>
      <Section1Card cardImage={Image4}  cardNumber={'04'} cardTitle={'Healthy Life'} cardText={"Embrace vitality and wellness with our array of fresh, locally-sourced organic offerings at the farmer's market."} />
      
     </HStack>
    </Box>
  )
}

export default Section1
