/* eslint-disable react/prop-types, no-nested-ternary */
import React from 'react';
import Box from '@mui/material/Box';
import Masonry from 'react-responsive-masonry';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Typography, Divider } from '@mui/material';
import Product from './Product';

// eslint-disable-next-line no-unused-vars
function ProductCategory({ title, products }) {
  const theme = useTheme();
  const upSm = useMediaQuery(theme.breakpoints.up('sm'));
  const upMd = useMediaQuery(theme.breakpoints.up('md'));
  const columnsCount = upSm ? 2 : 1;
  const masonryWidth = upMd ? 800 : upSm ? 575 : 325;

  return (
    <Box>
      <Box display="relative" sx={{ width: masonryWidth }}>
        <Divider sx={{ m: 1.5, mt: 2, borderBottomWidth: 1.2 }} />
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: 18,
          }}
          textAlign="center"
        >
          {title}
        </Typography>
        <Divider sx={{ m: 1.5, borderBottomWidth: 1.2 }} />
        <Masonry columnsCount={columnsCount}>
          {products.map((product, index) => (
          // eslint-disable-next-line react/no-array-index-key
            <Box key={index} sx={{ p: 1.5, pt: 0 }}>
              <Product
                title={product.title}
                imgUrl={product.imgUrl}
                description={product.description}
              />
            </Box>
          ))}
        </Masonry>
      </Box>
    </Box>
  );
}

export default ProductCategory;
