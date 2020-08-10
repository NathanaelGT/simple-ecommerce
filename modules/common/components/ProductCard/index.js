import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import PromoLabel from '@common/components/PromoLabel';
import ProductRating from '@common/components/ProductRating';

import { currencyFormatter } from '@utils/currency';

const useStyles = makeStyles({
  card: {
    maxWidth: 360,
    cursor: 'pointer'
  },
  image: {
    height: 140
  },
  price: {
    lineHeight: 'normal'
  },
  relative: {
    position: 'relative'
  },
  promoLabel: {
    position: 'absolute',
    bottom: 6,
    left: 4
  }
});

const ProductCard = ({ img, title, promoLabel, price, rating, sold, productId }) => {
  const classes = useStyles();
  return (
    <Link href="product/[id]" as={`product/${productId}`}>
      <Card>
        <div className={classes.card}>
          <div className={classes.relative}>
            <CardMedia
              className={classes.image}
              image={img}
              title={title}
            />
            {promoLabel.length > 0 &&
              <div className={classes.promoLabel}>
                <PromoLabel promo={promoLabel} />
              </div>
            }
          </div>
          <CardContent>
            <Grid container direction="column">
              <Typography gutterBottom variant="h6">
                {title}
              </Typography>
              <Typography variant="subtitle2" className={classes.price}>
                {currencyFormatter(price)}
              </Typography>
              <ProductRating rating={rating} sold={sold} />
            </Grid>
          </CardContent>
        </div>
      </Card>
    </Link>
  )
}

ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  promoLabel: PropTypes.array,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number,
  sold: PropTypes.number,
  productId: PropTypes.number.isRequired
}

export default ProductCard;