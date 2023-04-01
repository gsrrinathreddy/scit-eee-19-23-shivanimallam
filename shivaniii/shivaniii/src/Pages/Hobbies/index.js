import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [  
  {
    img : 'https://static2.bigstockphoto.com/0/5/3/large2/350664.jpg',
    title: 'Studying',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1495791185843-c73f2269f669?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGFuY2luZ3xlbnwwfHwwfHw%3D&w=1000&q=80',
    title: 'Dancing',
    
  },
  {
    img: 'https://ahchealthenewscdn.azureedge.net/wp-content/uploads/2016/11/Is-listening-to-your-favorite-song-good-for-you-health-505x336.jpg',
    title: 'Listening Songs',
    
  },
  {
    img: 'https://wonder-day.com/wp-content/uploads/2022/03/wonder-day-easy-drawings-for-beginners-to-draw-75.jpg',
    title: 'Drawing',
    
    cols: 2,
  },
  
];