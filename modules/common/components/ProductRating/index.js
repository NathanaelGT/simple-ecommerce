import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import yellow from '@material-ui/core/colors/yellow';

import Star from '@material-ui/icons/Star';
import StarHalf from '@material-ui/icons/StarHalf';
import StarBorder from '@material-ui/icons/StarBorder';

const useStyles = makeStyles({
  root: {
    justifyContent: 'flex-end'
  },
  ml6: {
    marginLeft: 6
  }
});

let key = 1,
  starSize = 12;

const star = type => {
  switch (type) {
    case 'Star':
      return <Star key={key++} style={{ fontSize: starSize, color: yellow[800] }} />;
    case 'StarHalf':
      return <StarHalf key={key++} style={{ fontSize: starSize, color: yellow[800] }} />;
    case 'StarBorder':
      return <StarBorder key={key++} style={{ fontSize: starSize, color: yellow[800] }} />;
  }
}

const ProductRating = ({ rating, sold, alignRight, variant }) => {
  const classes = useStyles();
  const starsComponent = [];
  const modulus = rating % 1;
  const ratingCountFloored = Math.floor(rating);

  if (variant === 'h6') starSize = 23;

  for (let i = 0; i < ratingCountFloored; i++)
    starsComponent.push(star('Star'));

  if (modulus >= 0.5)
    starsComponent.push(star('StarHalf'));

  for (let i = 0; i < 5 - starsComponent.length; i++)
    starsComponent.push(star('StarBorder'));

  return (
    <Grid
      container
      alignItems="center"
      className={clsx({
        [classes.root]: alignRight
      })}
    >
      {starsComponent}
      <Typography variant={variant} className={classes.ml6}>
        {sold + ' Sold'}
      </Typography>
    </Grid>
  )
}

ProductRating.defaultProps = {
  variant: 'subtitle2'
}

ProductRating.propTypes = {
  rating: PropTypes.number.isRequired,
  sold: PropTypes.number.isRequired,
  alignRight: PropTypes.bool,
  variant: PropTypes.string
}

export default ProductRating;