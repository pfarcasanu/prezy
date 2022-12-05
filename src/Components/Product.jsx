/* eslint-disable react/require-default-props */
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// eslint-disable-next-line react/prop-types
function Product({ title, description, url }) {
  return (
    <Card sx={{ minWidth: 200, maxWidth: 380 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          src={url}
          alt="test"
          sx={{ minHeight: 150, maxHeight: 450 }}
        />
        <CardContent>
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
      </CardActionArea>
    </Card>
  );
}

export default Product;
