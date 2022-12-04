/* eslint-disable react/require-default-props */
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Img from '../Static/test.png';

// eslint-disable-next-line react/prop-types
function Product({ title, description }) {
  return (
    <Card sx={{ minWidth: 300, maxWidth: 375 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={Img}
          alt="test"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Product;
