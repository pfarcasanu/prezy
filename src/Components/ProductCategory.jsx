/* eslint-disable react/prop-types, no-nested-ternary */
import React from 'react';
import Box from '@mui/material/Box';
import Masonry from 'react-responsive-masonry';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Typography, Divider } from '@mui/material';
import Product from './Product';

// eslint-disable-next-line no-unused-vars
function ProductCategory({ title, products, isLast }) {
  const theme = useTheme();
  const upSm = useMediaQuery(theme.breakpoints.up('sm'));
  const upMd = useMediaQuery(theme.breakpoints.up('md'));
  const columnsCount = upSm ? 2 : 1;
  const masonryWidth = upMd ? 800 : upSm ? 575 : 325;

  return (
    <Box>
      <Box display="relative" sx={{ width: masonryWidth }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            fontSize: 18,
            textTransform: 'uppercase',
            p: 1.5,
            pt: 2,
            pb: 2,
          }}
        >
          {title}
        </Typography>
        <Masonry columnsCount={columnsCount}>
          {products.map((product, index) => (
          // eslint-disable-next-line react/no-array-index-key
            <Box key={index} sx={{ p: 1.5, pt: 0 }}>
              <Product
                title={product.title}
                description={product.description}
                url={product.url}
              />
            </Box>
          ))}
        </Masonry>
        <Divider sx={{ ml: 1.5, mr: 1.5, mt: 2 }} />
      </Box>
    </Box>
  );
}

export default ProductCategory;
