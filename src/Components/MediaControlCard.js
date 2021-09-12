import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import MicIcon from '@material-ui/icons/Mic';
import { RecordState } from 'audio-react-recorder';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxWidth: 200,
    maxHeight: 100,
    margin: '0 auto',
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
  const [record, setRecord] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [recordState, setRecordState] = useState(null);

  // Change the record state
  const recordControl = () => {
    setRecord(!record);
  }

  useEffect(() => {
    record ? setRecordState({ recordState: RecordState.START }) : setRecordState({ recordState: RecordState.STOP });
  }, [record]);

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
          <IconButton onClick={recordControl} aria-label="record">
            {/* <AudioReactRecorder canvasWidth={40} canvasHeight={40} foregroundColor={'rgb(256, 256, 70)'} backgroundColor={'rgb(256, 256, 70)'} state={recordState} onStop={console.log('audio')} /> */}
            <MicIcon className="recordButton" style={{ width: 30, height: 30, color: record ? 'red' : 'black' }} />
          </IconButton>
        </div>
      </div>
    </Card>
  );
}