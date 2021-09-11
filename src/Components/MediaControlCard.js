import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import ReactHowler from 'react-howler';
// const { Howl } = require("howler");

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
  const [activeLoops, setActiveLoops] = useState([]);
  const [playing, setPlaying] = useState(false);
  // const [sound, setSound] = useState();

  const playLoops = () => {
    const active = props.loops.map(loop => loop.url);
    setActiveLoops(activeLoops => [...active]);
    // setActiveLoops(['https://drive.google.com/uc?export=download&id=1noQWMzjEQtBmlwbR8dNUOhTFyCjto0FR'],['https://drive.google.com/uc?export=download&id=1uZhRv8noq9N0ENT044Nec9g2ghJGz_fI'],['https://drive.google.com/uc?export=download&id=1K6MQYzMj3YjGwP8xj5TrOFFKnIFkQAZC']);
    setPlaying(true);
  }

  const stopLoops = () => {
    setPlaying(false);
  }

  useEffect(() => {
    console.log(playing, activeLoops);
  }, [playing, activeLoops]);

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        {(activeLoops.length>0)?<ReactHowler
          src={activeLoops}
          // src={['https://drive.google.com/uc?export=download&id=1uZhRv8noq9N0ENT044Nec9g2ghJGz_fI','https://drive.google.com/uc?export=download&id=1K6MQYzMj3YjGwP8xj5TrOFFKnIFkQAZC','https://drive.google.com/uc?export=download&id=1noQWMzjEQtBmlwbR8dNUOhTFyCjto0FR']}
          playing={playing}
          html5={true}
          loop={true}
        />:<div></div>}


        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton onClick={playLoops} aria-label="play">
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton onClick={stopLoops} aria-label="stop">
            <StopIcon className={classes.playIcon} />
          </IconButton>
        </div>
      </div>
    </Card>
  );
}