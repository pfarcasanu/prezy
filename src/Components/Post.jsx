/* eslint-disable react/no-array-index-key */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ProductCategory from './ProductCategory';

const categories = [
  {
    title: 'For the baker who wants to spruce up their supplies',
    products: [
      {
        title: 'OXO Good Grips 8-Piece Baking Set',
        description: 'Give your favorite baker the gift of a well-organized kitchen. With this dishwasher-safe container set, your giftee can store all of the essential ingredients for easy access– without leaving a thing out of place. Buy it for the neat freak in your life, or the one who could use a little extra help.',
        imgUrl: 'https://res.cloudinary.com/dhc72wrqp/image/upload/v1670200515/prezy-prototype/gifts-for-bakers/oxo_o0l4xx.png',
      },
      {
        title: 'Libbey Selene Glass Cake Stand',
        description: 'Know a baker who loves to host? This glass cake dome set acts as a beautiful dessert holder for a dinner party spread. With a stand that spans 13” in diameter, it’s the perfect option for cupcakes, brownies, cookies, or anything else you’d like to display. Just be sure to let them know that it’s hand-wash only.',
        imgUrl: 'https://res.cloudinary.com/dhc72wrqp/image/upload/v1670200665/prezy-prototype/gifts-for-bakers/cake_stand_mvf9go.png',
      },
      {
        title: 'Garden Tile Measuring Cups',
        description: 'Shopping for a baker with a delicate, classic aesthetic? These stackable ceramic measuring cups add a flowery touch to any kitchen. Gift the set as an accent piece, or pair it with another item from the collection. Choose from a pie dish, dinner plates, a spoon rest, a butter dish, or even a pet bowl.',
        imgUrl: 'https://res.cloudinary.com/dhc72wrqp/image/upload/v1670200665/prezy-prototype/gifts-for-bakers/measuring_cups_zp54cv.png',
      },
      {
        title: 'Baker’s Collection Spice Box',
        description: 'Shopping for a baker with a delicate, classic aesthetic? These stackable ceramic measuring cups add a flowery touch to any kitchen. Gift the set as an accent piece, or pair it with another item from the collection. Choose from a pie dish, dinner plates, a spoon rest, a butter dish, or even a pet bowl.',
        imgUrl: 'https://res.cloudinary.com/dhc72wrqp/image/upload/v1670200665/prezy-prototype/gifts-for-bakers/spices_iwvp1n.jpg',
      },
    ],
  },
  {
    title: 'For the bookworm baker',
    products: [
      {
        title: 'Ratio: The Simple Codes Behind the Craft of Everyday Cooking',
        description: 'In this New York Times Bestseller, author Michael Ruhlman lays out the concept of ratios as it relates to the basics of cooking. He aims to eliminate the need for step-by-step recipes by teaching his readers about the relationship between fundamental ingredients (water, flour, butter and oil, milk and cream, eggs).In the form of a gripping adventure story, Ruhlman rewrites the narrative of instruction-based baking, instead leaning into the science behind it. This book is the perfect gift for creative bakers who want to improvise in the kitchen with confidence.',
        imgUrl: 'https://res.cloudinary.com/dhc72wrqp/image/upload/v1670200665/prezy-prototype/gifts-for-bakers/simple_codes_waqbck.jpg',
      },
      {
        title: 'The Flavor Bible',
        description: 'This book may not be directly targeted at bakers, but it’s nevertheless an invaluable resource for any type of chef. Through an alphabetical list of thousands of ingredient entries, it offers a complete guide to crafting extraordinary flavor combinations and seasonings. With this book, your favorite baker will have a go-to resource for exploring and experimenting on the fly.',
        imgUrl: 'https://res.cloudinary.com/dhc72wrqp/image/upload/v1670200665/prezy-prototype/gifts-for-bakers/flavor_bible_s7etia.png',
      },
      {
        title: 'Baking with Dorie: Sweet, Salty & Simple',
        description: 'Even the best baker needs a good recipe book. In this aesthetic coffee table book, renowned culinary author Dorie Greenspan shares a variety of recipes, from breakfast dishes to pies and tarts. Many of the entries are even inspired by her travels, including Paris-style cookies and Lisbon chocolate cake.With this award-winning book, you can simultaneously present your giftee with a collection of sophisticated recipes and an eye-catching conversation piece.',
        imgUrl: 'https://res.cloudinary.com/dhc72wrqp/image/upload/v1670200665/prezy-prototype/gifts-for-bakers/dorie_xgbqn2.png',
      },
    ],
  },
  {
    title: 'For the sentimental baker',
    products: [
      {
        title: 'Custom Pet Portrait Cookie Cutter',
        description: 'What’s the point of having a furry friend if you can’t memorialize it as a sugar cookie? Gift your pet-loving baker a custom cookie cutter so they can do just that. You can even combine it with a jar of homemade mix for a personal touch!Note: Since each cookie cutter is custom-made, your order can take some time to process. Keep that in mind, and plan ahead if this is on your list!',
        imgUrl: 'https://res.cloudinary.com/dhc72wrqp/image/upload/v1670200993/prezy-prototype/gifts-for-bakers/cookie_cutter_fghl8x.png',
      },
      {
        title: 'Personalized Pie Dish',
        description: 'Does your giftee have a signature dessert? Maybe one that they bring for every gift, event, or holiday? Save them a page on their recipe book and get it printed on a pie pan. If the measurements are top secret, you may have to do some sleuthing. But it will be well worth it once you present them with this sentimental dish.',
        imgUrl: 'https://res.cloudinary.com/dhc72wrqp/image/upload/v1670200995/prezy-prototype/gifts-for-bakers/personalized_pie_jau6rt.png',
      },
      {
        title: 'Recipe Photo Book',
        description: 'Every baker needs a classic recipe book. The only thing better is a photo version so they can preserve a picture of each dish. With Mixbook, you can order a personalized record of all of their best work. This custom book makes the perfect gift for a parent, spouse, or baking buddy who always means to document their creations but never does.',
        imgUrl: 'https://res.cloudinary.com/dhc72wrqp/image/upload/v1670200992/prezy-prototype/gifts-for-bakers/recipe_photo_bs0fed.png',
      },
    ],
  },
];

function Post() {
  console.log('build post');
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
        <Box sx={{ flexGrow: 1, pl: 1, pr: 1 }} maxWidth="400px">
          <Typography
            variant="h5"
            align="center"
            sx={{
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            Sweet Gifts for Bakers
          </Typography>
          <Typography
            variant="body2"
            align="center"
            sx={{
              p: 0.5,
              fontWeight: 200,
              fontSize: 11,
              lineHeight: 1.4,
              color: 'text.secondary',
            }}
          >
            Looking for the perfect gift for the baker in your life?
            Weve scoured the internet for unique gifts ranging from practical to trendy.
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
          categories.map((category, index) => (
            <ProductCategory
              key={index}
              title={category.title}
              products={category.products}
              isLast={index === categories.length}
            />
          ))
        }
      </Box>
    </Box>
  );
}

export default Post;
