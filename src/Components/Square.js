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
    const changeLoopState = props.changeLoopState;

    // Change the loop state on clicking the ON/OFF button
    const handleClickIcon = (id, cond) => {
        if (cond === 'deactivate') {
            loops.state = 'off';
        }
        changeLoopState(id, cond);
    }


    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <div className="stateControl" style={{ alignItems: 'space-between' }}>
                    <ReactHowler
                        src={loops.url}
                        playing={(props.playing && loops.state === 'on')}
                        html5={true}
                        loop={true}
                    />
                    <Button className="onButton" onClick={() => handleClickIcon(loops.id, 'activate')} variant={loops.state === 'on' ? "contained" : ""} color="primary">
                        ON
                    </Button>
                    <Button className="offButton" onClick={() => handleClickIcon(loops.id, 'deactivate')} variant={loops.state === 'off' ? "contained" : ""} color="secondary">
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