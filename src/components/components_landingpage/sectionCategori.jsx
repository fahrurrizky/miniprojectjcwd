import { Container, Box, Grid, GridItem } from '@chakra-ui/react';
import CaptionCarousel from "./CarouselBanner";
// import { postsData } from './dataSection';
// import Card from './cardSection';

const Categories = () => {
  return (
    <Box py={'25'} px={'10'}>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
      <GridItem>
        <Box bg="red.200" height="500px">
          </Box>
      </GridItem>
      <GridItem>
        <Box bg="blue.200" height="500px" />
      </GridItem>
    </Grid>
    </Box>
  );
};

export default Categories;