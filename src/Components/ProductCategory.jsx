/* eslint-disable react/prop-types */
import React from 'react';
import Box from '@mui/material/Box';
import Masonry from 'react-responsive-masonry';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Product from './Product';

// eslint-disable-next-line no-unused-vars
function ProductCategory({ title, products }) {
  const theme = useTheme();
  const upSm = useMediaQuery(theme.breakpoints.up('sm'));
  const upMd = useMediaQuery(theme.breakpoints.up('md'));
  const columnsCount = upSm ? 2 : 1;
  // eslint-disable-next-line no-nested-ternary
  const masonryWidth = upMd ? 800 : upSm ? 575 : 325;

  return (
    <Box display="relative" sx={{ width: masonryWidth, pt: 1 }}>
      <Masonry columnsCount={columnsCount}>
        {products.map((product, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Box key={index} sx={{ p: 1.5 }}>
            <Product
              title={product.title}
              description={product.description}
              url={product.url}
            />
          </Box>
        ))}
      </Masonry>
    </Box>
  );
}

export default ProductCategory;
