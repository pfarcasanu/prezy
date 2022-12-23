/* eslint-disable react/require-default-props */
import React from 'react';
import Typography from '@mui/material/Typography';
import {
  Box, Button,
  CardActions, CardContent, CardMedia, Card,
} from '@mui/material';

// eslint-disable-next-line react/prop-types
function Product({ title, description, imgUrl }) {
  return (
    <Card
      className="customCard"
      sx={{
        minWidth: 200,
        maxWidth: 380,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
      }}
      elevation={0}
    >
      <CardMedia
        component="img"
        src={imgUrl}
        alt="test"
        sx={{ minHeight: 150, maxHeight: 300 }}
      />
      <CardContent sx={{ p: 2, pb: 0 }}>
        <Typography
          gutterBottom
          variant="h6"
          sx={{ fontWeight: 600, fontSize: 18 }}
        >
          {title}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 2 }}>
        <Box
          sx={{ flexGrow: 1 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            color="mediumGray"
            variant="contained"
            disableElevation
            sx={{
              width: 110,
              borderRadius: 5,
            }}
          >
            Shop Now
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}

export default Product;
