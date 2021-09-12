import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxWidth: 150,
    maxHeight: 100,
    margin: '0 auto'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <div className={classes.controls}>
          <IconButton onClick={() => props.setPlaying(false)} aria-label="stop">
            <StopIcon className={classes.playIcon} />
          </IconButton>
          <IconButton onClick={() => props.setPlaying(true)} aria-label="play">
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
        </div>
      </div>
    </Card>
  );
}