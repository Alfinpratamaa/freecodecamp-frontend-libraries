import React, { useState, useEffect } from 'react';

const DrumMachine = () => {
    const [display, setDisplay] = useState('');

    const playSound = (sound: string) => {
        const audio = new Audio(sound);
        audio.play();
        setDisplay(sound.slice(29, -4)); // Extracting sound name for display
    };

    const handleKeyPress = (event: React.KeyboardEvent) => {
        const key = event.key.toUpperCase();
        const audioElement = document.getElementById(key) as HTMLAudioElement;
        if (audioElement) {
            audioElement.play();
            if (audioElement.parentElement) {
                setDisplay(audioElement.parentElement.id);
            }
        }
    };

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            const key = event.key.toUpperCase();
            const audioElement = document.getElementById(key) as HTMLAudioElement;
            if (audioElement) {
                audioElement.play();
                if (audioElement.parentElement) {
                    setDisplay(audioElement.parentElement.id);
                }
            }
        };

        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return (
        <div id="drum-machine" className="container">
            <div id="display" className="mb-3">{display}</div>
            <div className="row">
                <div className="col">
                    <div className="drum-pad" id="Heater-1" onClick={() => playSound('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3')}>
                        Q
                        <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
                    </div>
                    <div className="drum-pad" id="Heater-2" onClick={() => playSound('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3')}>
                        W
                        <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
                    </div>
                    <div className="drum-pad" id="Heater-3" onClick={() => playSound('https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3')}>
                        E
                        <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
                    </div>
                </div>
                <div className="col">
                    <div className="drum-pad" id="Heater-4" onClick={() => playSound('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3')}>
                        A
                        <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
                    </div>
                    <div className="drum-pad" id="Clap" onClick={() => playSound('https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3')}>
                        S
                        <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
                    </div>
                    <div className="drum-pad" id="Open-HH" onClick={() => playSound('https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3')}>
                        D
                        <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
                    </div>
                </div>
                <div className="col">
                    <div className="drum-pad" id="Kick-n-Hat" onClick={() => playSound('https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3')}>
                        Z
                        <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
                    </div>
                    <div className="drum-pad" id="Kick" onClick={() => playSound('https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3')}>
                        X
                        <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
                    </div>
                    <div className="drum-pad" id="Closed-HH" onClick={() => playSound('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3')}>
                        C
                        <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DrumMachine;
