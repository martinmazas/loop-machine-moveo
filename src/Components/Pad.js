import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MediaControlCard from './MediaControlCard';
import Square from './Square';
import allLoops from '../Data/samples.json';

const styles = {
    wrapper: {
        backgroundColor: 'green',
        height: '100vh'
    },
    squares: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        backgroundColor: 'yellow'
    }
}

export default function Pad() {
    const [loops, setLoops] = useState(allLoops);

    const changeLoopState = (id) => {
        const changeLoop = loops.filter(loop => loop.id === id);
        changeLoop[0].state  = changeLoop[0].state === 'on'? 'off': 'on';
        setLoops(loops =>[...loops]);
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed style={styles.wrapper}>
                {/* <Typography component="div" style={{ backgroundColor: 'green', height: '100vh' }} /> */}
                <MediaControlCard loops={loops.filter(loop => loop.state === 'on')}/>
                <div style={styles.squares}>
                    {loops.map((loop => (
                        <Square key={loop.id} loop={loop} changeLoopState={changeLoopState} />
                    )))}
                </div>
            </Container>
        </React.Fragment>
    );
}