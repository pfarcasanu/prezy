/* eslint-disable react/prop-types */
import React from 'react';
import {
  Box, Typography,
  useMediaQuery, useTheme,
  Card, CardContent, CardMedia,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

export default function Previews({ previews, navigateTo }) {
  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box
      sx={{ pt: upMd ? 2 : 0, display: 'flex' }}
      justifyContent="center"
      alignItems="center"
    >
      <Box sx={{ display: 'relative', width: upMd ? '90%' : '100%' }}>
        <Grid container columnSpacing={2} rowSpacing={0}>
          {
          previews.map((post) => (
            <Grid key={post.slug} xs={6} md={4}>
              <Card elevation={0}>
                <CardMedia
                  component="img"
                  image={post.imgUrl}
                  alt={post.title}
                  className="hoverable"
                  onClick={() => navigateTo(post.slug)}
                />
                <CardContent
                  sx={{ p: 1, pb: 0 }}
                  className="hoverable"
                  onClick={() => navigateTo(post.slug)}
                >
                  <Typography
                    component="div"
                    variant="h6"
                    textAlign="center"
                    sx={{ fontSize: upMd ? 18 : 14, pb: 0 }}
                  >
                    {post.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        }
        </Grid>
      </Box>
    </Box>
  );
}
