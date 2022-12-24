/* eslint-disable react/prop-types */
import React from 'react';
import Box from '@mui/material/Box';
import {
  Card, CardMedia, CardContent,
  useMediaQuery, useTheme,
  Typography,
} from '@mui/material';

export default function HighlightedPost({
  post, navigateTo,
}) {
  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Card
      sx={{
        display: upMd ? 'flex' : 'relative',
        p: upMd ? 5 : 3,
      }}
      elevation={0}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box sx={{ width: upMd ? '500px' : '100%' }}>
          <CardMedia
            component="img"
            image={post.imgUrl}
            alt={post.title}
            onClick={() => navigateTo(post.slug)}
            className="hoverable"
          />
        </Box>
      </Box>
      <Box
        sx={{ display: 'flex', flexDirection: 'column' }}
        justifyContent="center"
        alignItems="center"
      >
        <CardContent
          className="hoverable"
          sx={{ width: upMd ? '80%' : '100%' }}
          onClick={() => navigateTo(post.slug)}
        >
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            {post.title}
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
          >
            {post.date}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
          >
            {post.description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
