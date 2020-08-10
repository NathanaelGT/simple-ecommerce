import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  container: {
    width: 250,
    padding: '24px 16px'
  },
  vendor: {
    marginBottom: 20,
    cursor: 'pointer'
  },
  footer: {
    position: 'fixed',
    left: 55,
    bottom: 30,
    width: '100%',
    color: 'black',
    fontSize: 20,
    textDecoration: 'unset'
  }
}));

const SideBar = ({ open, onClose }) => {
  const classes = useStyles();

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <div className={classes.container}>
        <Link href="/simple-ecommerce">
          <Typography variant="h6" className={classes.vendor}>
            Syopipedia
          </Typography>
        </Link>
        <Typography>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero quibusdam temporibus molestias unde cum cumque animi architecto hic neque eligendi, quis atque sunt sed deleniti. Dicta, aspernatur. Possimus, minima sit!
        </Typography>
        <a
          href="https://www.instagram.com/nat.hanaelgt/"
          target="_blank"
          className={classes.footer}
        >
          @nat.hanaelgt
        </a>
      </div>
    </Drawer>
  )
}

SideBar.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default SideBar;