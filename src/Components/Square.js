import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import ToggleOffIcon from '@material-ui/icons/ToggleOff';
// import ToggleOnIcon from '@material-ui/icons/ToggleOn';
import Button from '@material-ui/core/Button';
import ReactHowler from 'react-howler';

// const { Howl } = require("howler");

const useStyles = makeStyles({
    root: {
        width: 250,
        height: 250,
        marginLeft: 50,
        marginBottom: 50,
        display: 'inline-block',
        // backgroundColor: 'pink'
    },
    title: {
        fontSize: 25,
    },
});

export default function Square(props) {
    const classes = useStyles();
    const loops = props.loop;
    const changeLoopState = props.changeLoopState;

    const handleClickIcon = (id, cond) => {
        if(cond === 'deactivate')
        {
            loops.state = 'off';
        }
        changeLoopState(id, cond);
    }


    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {loops.name}
                </Typography>
                <div style={{ marginTop: 50, alignItems: 'space-between' }}>
                    <ReactHowler
                        src={loops.url}
                        playing={(props.playing && loops.state === 'on')}
                        html5={true}
                        loop={true}
                    />
                    <Button onClick={() => handleClickIcon(loops.id, 'activate')} variant={loops.state === 'on' ? "contained" : ""} color="primary">
                        ON
                    </Button>
                    <Button onClick={() => handleClickIcon(loops.id, 'deactivate')} variant={loops.state === 'off' ? "contained" : ""} color="secondary">
                        OFF
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}