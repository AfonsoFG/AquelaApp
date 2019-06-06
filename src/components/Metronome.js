import React, { Component, Fragment } from 'react';
import '../assets/css/App.css';

import MetroBar0 from '../assets/sounds/MetroBar0.wav';
import MetroBeat0 from '../assets/sounds/MetroBeat0.wav';
import MetroBar1 from '../assets/sounds/MetroBar1.wav';
import MetroBeat1 from '../assets/sounds/MetroBeat1.wav';
import MetroBar2 from '../assets/sounds/MetroBar2.wav';
import MetroBeat2 from '../assets/sounds/MetroBeat2.wav';
import MetroBar3 from '../assets/sounds/MetroBar3.wav';
import MetroBeat3 from '../assets/sounds/MetroBeat3.wav';
import MetroBar4 from '../assets/sounds/MetroBar4.wav';
import MetroBeat4 from '../assets/sounds/MetroBeat4.wav';

import { ReactComponent as MetronomoMachine } from '../assets/img/metronome/metronome.svg';

import { AppSectionHeader, AppSectionFooter, MetronomeSelect, MetronomeRange, MetronomeStats, MetronomeButton } from './'

const sounds = {
    'MetroBar0': MetroBar0,
    'MetroBeat0': MetroBeat0,
    'MetroBar1': MetroBar1,
    'MetroBeat1': MetroBeat1,
    'MetroBar2': MetroBar2,
    'MetroBeat2': MetroBeat2,
    'MetroBar3': MetroBar3,
    'MetroBeat3': MetroBeat3,
    'MetroBar4': MetroBar4,
    'MetroBeat4': MetroBeat4,
}

class Metronome extends Component {

    constructor() {
        super();

        this.state = {
            playing: false,
            bpm: 60,
            beatsPerMeasure: 4,
            beatNumber: 0
        }

        this.bar = new Audio(MetroBar0);
        this.beat = new Audio(MetroBeat0);

    }

    componentWillUnmount() {
        if (this.state.playing) {
            this.startStop();
        }
    }

    selectSound = () => {
        let selectSoundBeat = document.getElementById("selectSoundBeat");
        let selectSoundBar = document.getElementById("selectSoundBar");

        let soundBeat = selectSoundBeat.options[selectSoundBeat.selectedIndex].value;
        let soundBar = selectSoundBar.options[selectSoundBar.selectedIndex].value;

        this.beat = new Audio(sounds[soundBeat]);
        this.bar = new Audio(sounds[soundBar]);

    }

    changeBPM = (bpm) => {
        clearInterval(this.timerId);
        this.setState({ bpm, playing: false });
        document.getElementById("pendulum").style.animation = "";
    }

    playClick = () => {

        this.selectSound();
        const { beatNumber, beatsPerMeasure } = this.state;

        // The first beat will have a different sound than the others
        if (beatNumber % beatsPerMeasure === 0) {
            this.beat.play();
        } else {
            this.bar.play();
        }

        // Keep track of which beat we're on
        this.setState({
            beatNumber: (beatNumber + 1) % beatsPerMeasure
        });
    };


    startStop = () => {
        if (this.state.playing) {
            //STOP
            document.getElementById("pendulum").style.animation = "";
            clearInterval(this.timerId);
        } else {
            //PLAY
            let animDuration = 60 / this.state.bpm * 2;

            document.getElementById("pendulum").style.animation = "pendulum " + animDuration + "s infinite 0.5s";
            this.timerId = setInterval(this.playClick, (60 / (this.state.bpm)) * 1000);
        }

        this.beatNumber = 0;

        this.setState({
            beatNumber: 0,
            playing: !this.state.playing
        });
    }

    render() {
        const { playing, bpm, beatsPerMeasure, beatNumber } = this.state;
        return (
            <Fragment>
                <AppSectionHeader />
                <div className="container pageBody pageMetronome">
                    <div className='row'>
                        <div className="col-md-12">
                            <h3>Metronome</h3>
                        </div>
                        <div className='col-md-8 main'>
                            <div className="slideContainer">

                                <div className="row">
                                    <div className='col-md-12'>
                                        <label htmlFor="selectSoundBar">Bar Sound</label>
                                        <MetronomeSelect id={"selectSoundBar"} defaultValue={"MetroBar0"} options={sounds} />
                                    </div>
                                    <div className='col-md-12'>
                                        <label htmlFor="selectSoundBeat" className="mt20">Beat Sound</label>
                                        <MetronomeSelect id={"selectSoundBeat"} defaultValue={"MetroBeat0"} options={sounds} />
                                    </div>
                                </div>

                                <MetronomeStats bpm={bpm} beatsPerMeasure={beatsPerMeasure} beatNumber={beatNumber} />
                                <MetronomeRange value={bpm} handleChange={this.changeBPM} />
                                <br />

                                <MetronomeButton handleClick={this.startStop} isPlaying={playing} />

                            </div>
                        </div>
                        <div className='col-md-4'>
                            <MetronomoMachine />
                        </div>
                    </div>
                </div>
                <AppSectionFooter />
            </Fragment>
        )
    }

}

export default Metronome