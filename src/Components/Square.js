import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ReactHowler from 'react-howler';

const useStyles = makeStyles({
    root: {
        width: 250,
        height: 250,
        marginLeft: 50,
        marginTop: 50,
        display: 'inline-block',
    },
    title: {
        fontSize: 25,
    },
});

export default function Square(props) {
    const classes = useStyles();
    const loops = props.loop;
    const playing = props.playing;
    const changeLoopState = props.changeLoopState;
    const switchWaitToOn = props.switchWaitToOn;

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <div className="stateControl" style={{ alignItems: 'space-between' }}>
                    {loops.state === 'on' ?
                        <ReactHowler
                            src={loops.url}
                            playing={playing}
                            html5={true}
                            preload={true}
                            onEnd={switchWaitToOn}
                        /> : ""
                    }

                    <Button className="onButton" onClick={() => changeLoopState(loops.id, 'activate')} variant={loops.state !== 'off' ? "contained" : "outlined"} color="primary">
                        ON
                    </Button>
                    <Button className="offButton" onClick={() => changeLoopState(loops.id, 'deactivate')} variant={loops.state === 'off' ? "contained" : "outlined"} color="secondary">
                        OFF
                    </Button>
                </div>
                <div className="loopName" style={{ marginTop: '10vh' }}>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {loops.name}
                    </Typography>
                </div>

            </CardContent>
        </Card>
    );
}