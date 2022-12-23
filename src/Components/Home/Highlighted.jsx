/* eslint-disable react/prop-types */
import React from 'react';
import Box from '@mui/material/Box';
import {
  Card, CardMedia, CardContent,
  useMediaQuery, useTheme,
  Typography,
} from '@mui/material';

export default function HighlightedPost({
  title, description, imgUrl, slug, navigateTo,
}) {
  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Card
      sx={{
        display: upMd ? 'flex' : 'relative',
        p: upMd ? 3 : 1,
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
            image={imgUrl}
            alt={title}
            onClick={() => navigateTo(slug)}
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
          onClick={() => navigateTo(slug)}
        >
          <Typography component="div" variant="h5" sx={{ fontWeight: 600 }}>
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{ pt: 1 }}
          >
            {description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
