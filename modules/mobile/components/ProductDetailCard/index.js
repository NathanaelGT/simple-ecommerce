import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ProductRating from '@common/components/ProductRating';
import PromoCard from '@common/components/PromoCard';
import ProductInfoPanel from '@common/components/ProductInfoPanel';

import { currencyFormatter } from '@utils/currency';

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: theme.spacing(8)
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  productInfo: {
    marginTop: theme.spacing(2)
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  }
}));

const ProductDetailCard = (
  { img, title, price, rating, sold, description, quantity, condition, weight, promo }
) => {
  const [expanded, setExpanded] = useState(true);
  const classes = useStyles();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }

  const info = { Weight: weight, Condition: condition, Stock: quantity, Sold: sold };

  return (
    <div className={classes.container}>
      <Card>
        <CardMedia
          className={classes.media}
          image={img}
          title={title}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>

          <Grid container spacing={1}>
            <Grid item xs={6} sm={6}>
              <Typography variant="h6" color="secondary">
                {currencyFormatter(price)}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6}>
              <ProductRating rating={rating} sold={sold} alignRight variant="h6" />
            </Grid>
          </Grid>

          <Grid container spacing={1} className={classes.productInfo}>

            {Object.keys(info).map((key, i) => (
              <Grid key={i} container direction="column" justify="center" item xs={3} sm={3}>
                <Typography align="center" variant="subtitle1">
                  {key}
                </Typography>
                <Typography align="center" variant="subtitle1">
                  {(info[key])}
                </Typography>
              </Grid>
            ))}

          </Grid>
        </CardContent>
        <CardActions>
          <Grid container justify="center" alignItems="center">
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded
              })}
              onClick={handleExpandClick}
            >
              <ExpandMoreIcon />
            </IconButton>
          </Grid>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph variant="h6">
              Description
            </Typography>
            <Typography paragraph variant="subtitle1">
              {description}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <PromoCard promo={promo} />
      <ProductInfoPanel />
    </div>
  )
}

ProductDetailCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  sold: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  condition: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  promo: PropTypes.array.isRequired,
}

export default ProductDetailCard;