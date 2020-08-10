import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, 0.3)',
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

const PromoCard = ({ promo }) => {
  if (promo.length === 0) return null;
  const classes = useStyle();

  const prettyPromoLabel = promo => {
    switch (promo) {
      case 'CASHBACK':
        return 'Cashback'
      case 'FREESHIPPING':
        return 'Free Shipping'
      default:
        return 'Invalid'
    }
  }

  const breakPoints = 12 / promo.length;

  return (
    <Grid container spacing={1}>
      {promo.map((promo, i) => (
        <Grid key={i} item xs={breakPoints} sm={breakPoints}>
          <Paper variant="outlined" classes={{ root: classes.root }}>
            <Typography>
              {prettyPromoLabel(promo)}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
}

PromoCard.propTypes = {
  promo: PropTypes.array.isRequired
}

export default PromoCard;