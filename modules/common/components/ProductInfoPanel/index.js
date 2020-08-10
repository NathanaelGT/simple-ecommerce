import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(2)
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

const ProductInfoPanel = () => {
  const classes = useStyles();
  const info = [];

  for (let i = 1; i <= 3; i++) {
    info.push(
      <Accordion key={i}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id={`"panel${i}a-header"`}
        >
          <Typography className={classes.heading}>
            Product Info {i}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae repellat quia dolore fugiat obcaecati vel expedita aliquid fugit asperiores laudantium.
          </Typography>
        </AccordionDetails>
      </Accordion>
    )
  }

  return (
    <div className={classes.container}>
      {info}
    </div>
  )
}

export default ProductInfoPanel;