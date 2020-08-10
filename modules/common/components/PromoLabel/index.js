import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles({
  label: {
    cursor: 'pointer',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, 0.3)',
    borderRadius: 20
  }
});

const PromoLabel = ({ promo }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={1}>
      {promo.map((label, i) => (
        <Grid item key={label + i}>
          <Chip
            className={classes.label}
            // color="secondary"
            size="small"
            label={label.toLowerCase()}
          />
        </Grid>
      ))}
    </Grid>
  )
}

PromoLabel.propTypes = {
  promo: PropTypes.array.isRequired
}

export default PromoLabel;