import React, { useState } from 'react';
import AudioReactRecorder, { RecordState } from 'audio-react-recorder';


export default function RecordLoop(props) {
    const [recordState, setRecordState] = useState(null);

    return (
        <div>
            {/* <button>HELLLLOOO</button> */}
            {/* <AudioReactRecorder state={recordState} onStop={console.log('audio')} /> */}

        </div>
    )
}