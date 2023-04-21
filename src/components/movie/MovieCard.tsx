import React from 'react';
import {Card, Typography} from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import {red} from '@mui/material/colors';
import LaunchIcon from '@mui/icons-material/Launch';
import IMoviePartial from '../../interfaces/IMoviePartial';
import {useNavigate} from 'react-router-dom';

const MovieCard = ({Title, Year, imdbID, Type, Poster}: IMoviePartial) => {
  const navigate = useNavigate();
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
        <IconButton
          aria-label="See more"
          onClick={() => navigate(`/${Type}/${imdbID}`)}
        >
          <LaunchIcon />
        </IconButton>{' '}
        <Typography variant="caption">Click the button for more</Typography>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
