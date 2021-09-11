import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ToggleOffIcon from '@material-ui/icons/ToggleOff';
import ToggleOnIcon from '@material-ui/icons/ToggleOn';

const useStyles = makeStyles({
    root: {
        width: 150,
        height: 150,
        display: 'inline-block',
        backgroundColor: 'pink'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function Square(props) {
    const classes = useStyles();
    const loops = props.loop;
    const changeLoopState = props.changeLoopState;

    const handleClickIcon = (id) => {
        changeLoopState(id);
    }

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {loops.name}
                </Typography>
                On{loops.state === 'on'? <ToggleOffIcon onClick={() => handleClickIcon(loops.id)}/>: <ToggleOnIcon onClick={() => handleClickIcon(loops.id)}/>}Off
            </CardContent>
        </Card>
    );
}