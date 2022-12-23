/* eslint-disable react/no-array-index-key, react/prop-types */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import Category from './Category';
import posts from '../../Static/posts.json';

function Post() {
  const { slug } = useParams();
  const post = posts[slug];

  return (
    <Box style={{ background: '#E7E7E7' }}>
      <Box
        display="flex"
        sx={{
          pt: 1.5,
          pb: 1.5,
          width: '100%',
          borderBottom: 0.5,
          borderColor: '#AFAFAF',
        }}
        style={{ background: '#FFFFFF' }}
        justifyContent="center"
        alignItems="center"
      >
        <Box sx={{
          flexGrow: 1, pl: 3, pr: 3, maxWidth: 500,
        }}
        >
          <Typography
            variant="h5"
            align="center"
            sx={{
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            {post.title}
          </Typography>
          <Typography
            variant="body2"
            align="center"
            sx={{
              p: 0.5,
              fontWeight: 200,
              fontSize: 12,
              lineHeight: 1.4,
              color: 'text.secondary',
            }}
          >
            {post.description}
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        {
          post.categories.map((category, index) => (
            <Category
              key={index}
              title={category.title}
              products={category.products}
            />
          ))
        }
      </Box>
    </Box>
  );
}

export default Post;
