import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import {red} from '@mui/material/colors';
import LaunchIcon from '@mui/icons-material/Launch';

const MovieCard = ({
  Title,
  Year,
  imdbID,
  Type,
  Poster,
}: {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}) => {
  return (
    <Card sx={{maxWidth: 345}}>
      <CardHeader
        avatar={
          <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
            {Type.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={Title}
        subheader={Year}
      />

      <CardMedia component="img" height="194" image={Poster} alt={Title} />

      <CardActions>
        <IconButton aria-label="add to favorites">
          <LaunchIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
