import React from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import posts from '../../Static/posts.json';
import HighlightedPost from './Highlighted';
import Previews from './Previews';

function Post() {
  const navigate = useNavigate();
  const postsList = Object.values(posts);
  const highlighted = postsList.pop(0);
  const previews = postsList.reverse();

  const navigateTo = (slug) => {
    navigate(`/posts/${slug}`);
    window.scrollTo(0, 0);
  };

  return (
    <Box>
      <HighlightedPost
        post={highlighted}
        navigateTo={navigateTo}
      />
      <Previews
        previews={previews}
        navigateTo={navigateTo}
      />
    </Box>
  );
}

export default Post;
