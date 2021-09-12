import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import MediaControlCard from './MediaControlCard';
import Square from './Square';
import allLoops from '../Data/samples.json';

const styles = {
    wrapper: {
        height: '100vh'
    },
    squares: {
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: 'yellow'
    }
}

export default function Pad() {
    const [loops, setLoops] = useState(allLoops);
    const [playing, setPlaying] = useState(false);

    const changeLoopState = (id, cond) => {
        const changeLoop = loops.filter(loop => loop.id === id);
        changeLoop[0].state = cond === 'activate' ? 'on' : 'off';
        setLoops(loops => [...loops]);
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed style={styles.wrapper}>
                <MediaControlCard loops={loops.filter(loop => loop.state === 'on')} setPlaying={setPlaying} />
                <div style={styles.squares}>
                    {loops.map((loop => (
                        <Square key={loop.id} loop={loop} changeLoopState={changeLoopState} playing={playing} setPlaying={setPlaying}/>
                    )))}
                </div>
            </Container>
        </React.Fragment>
    );
}