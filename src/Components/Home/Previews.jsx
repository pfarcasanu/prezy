/* eslint-disable react/prop-types */
import React from 'react';
import {
  Box, Typography,
  useMediaQuery, useTheme,
  Card, CardContent, CardMedia,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

function Preview({ post, navigateTo }) {
  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Grid item key={post.slug} xs={6} md={4} sx={{ display: 'flex' }}>
      <Card elevation={0}>
        <CardMedia
          component="img"
          image={post.imgUrl}
          alt={post.title}
          className="hoverable"
          onClick={() => navigateTo(post.slug)}
        />
        <CardContent
          sx={{ flexDirection: 'column' }}
          className="hoverable"
          onClick={() => navigateTo(post.slug)}
        >
          <Typography
            variant="h6"
            sx={{ fontSize: upMd ? 18 : 14, pb: 0 }}
          >
            {post.title}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Typography
            variant="caption"
          >
            {post.date}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default function Previews({ previews, navigateTo }) {
  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box
      justifyContent="center"
      alignItems="center"
      sx={{
        p: 3,
        pt: 5,
        display: 'flex',
        backgroundColor: '#E7E7E7',
      }}
    >
      <Box sx={{ display: 'relative', width: upMd ? '90%' : '100%' }}>
        <Grid
          container
          spacing={2}
          alignItems="stretch"
        >
          {
          previews.map((post) => (
            <Preview key={post.slug} post={post} navigateTo={navigateTo} />
          ))
        }
        </Grid>
      </Box>
    </Box>
  );
}
