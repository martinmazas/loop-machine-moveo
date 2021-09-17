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
        marginTop: 20,
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: 'skyblue'
    }
}

export default function Pad() {
    const [loops, setLoops] = useState(allLoops);
    const [playing, setPlaying] = useState(false);

    const changeLoopState = (id, cond) => {
        const changeLoop = loops.filter(loop => loop.id === id);
        changeLoop[0].state = cond === 'activate' ? 'wait' : 'off';
        console.log(changeLoop);
        setLoops(loops => [...loops]);
    }

    const switchWaitToOn = () => {
        loops.map(loop => loop.state === 'wait' ? loop.state = 'on' : "");
        setLoops(loops => [...loops]);
    }

    const switchAllOff = () => {
        loops.map(loop => loop.state = 'off');
        setLoops(loops => [...loops]);
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed style={styles.wrapper}>
                <MediaControlCard setPlaying={setPlaying} switchWaitToOn={switchWaitToOn} switchAllOff={switchAllOff} />
                <div style={styles.squares}>
                    {loops.map((loop => (
                        <Square key={loop.id} loop={loop} changeLoopState={changeLoopState} playing={playing} switchWaitToOn={switchWaitToOn} />
                    )))}
                </div>
            </Container>
        </React.Fragment>
    );
}