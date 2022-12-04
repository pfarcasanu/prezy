import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Item from './Item';

function Post() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      component={Stack}
      style={{ background: '#E7E7E7' }}
    >
      <Box
        display="flex"
        sx={{
          flexGrow: 1,
          p: 2,
          width: '100%',
          borderBottom: 0.5,
          borderColor: '#AFAFAF',
        }}
        style={{ background: '#FFFFFF' }}
        justifyContent="center"
        alignItems="center"
      >
        <Box sx={{ flexGrow: 1 }} maxWidth="40%">
          <Typography variant="h5" align="center" sx={{ p: 1 }}>
            Sweet Gifts for Bakers
          </Typography>
          <Typography variant="body2" align="center">
            Looking for the perfect gift for the baker in your life?
            Weve scoured the internet for unique gifts ranging from practical to trendy.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ flexGrow: 1, p: 2, maxWidth: 780 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(6)).map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Grid item xs={4} sm={4} md={6} key={index}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Item />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Post;
