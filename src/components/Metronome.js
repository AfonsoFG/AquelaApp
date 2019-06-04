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

import { Header, Footer, Sidebar, Slider, Heading, Button } from './'

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
            aTocar: false,
            bpm: 100
        }

        this.bar = new Audio(MetroBar0);
        this.beat = new Audio(MetroBeat0);

        this.beatNumber = 0;
    }

    componentWillUnmount() {
        if (this.state.aTocar) {
            this.togglePlay();
        }
    }

    selectSound = () => {
        let selectSound1 = document.getElementById("selectSound1");
        let selectSound2 = document.getElementById("selectSound2");

        let som1 = selectSound1.options[selectSound1.selectedIndex].value;
        let som2 = selectSound2.options[selectSound2.selectedIndex].value;

        this.bar = new Audio(sounds[som1]);
        this.beat = new Audio(sounds[som2]);
    }

    playClick = () => {

        this.selectSound();

        if (this.beatNumber === 0) {
            this.beat.play();
        } else {
            this.bar.play();
        }
        if (this.beatNumber < 3) {
            this.beatNumber++;
        } else {
            this.beatNumber = 0;
        }
    }

    togglePlay = () => {

        this.selectSound();

        if (this.state.aTocar) {
            // STOP
            clearInterval(this.timerId);

        } else {
            // PLAY
            this.timerId = setInterval(this.playClick, (60 / this.state.bpm) * 1000);

        }

        this.setState({
            aTocar: !this.state.aTocar
        });
    }

    changeBPM = (bpm) => {
        clearInterval(this.timerId);
        this.setState({
            bpm,
            aTocar: false
        });
    }

    render() {
        const { aTocar, bpm } = this.state;
        return (
            <Fragment>
                <Header />
                <div className="container pageBody pageMetronome">
                    <div className='row'>
                        <div className='col-md-9 main'>
                            <div className="slideContainer">
                                <h3>Metronome</h3>
                                <div className="row">
                                    <div className='col-md-6'>
                                        <p>Som 1</p>
                                        <select className="form-control" id="selectSound1">
                                            <option value="MetroBar0">Metro Bar 0</option>
                                            <option value="MetroBeat0">Metro Beat 0</option>
                                            <option value="MetroBar1">Metro Bar 1</option>
                                            <option value="MetroBeat1">Metro Beat 1</option>
                                            <option value="MetroBar2">Metro Bar 2</option>
                                            <option value="MetroBeat2">Metro Beat 2</option>
                                            <option value="MetroBar3">Metro Bar 3</option>
                                            <option value="MetroBeat3">Metro Beat 3</option>
                                            <option value="MetroBar4">Metro Bar 4</option>
                                            <option value="MetroBeat4">Metro Beat 4</option>
                                        </select>
                                    </div>
                                    <div className='col-md-6'>
                                        <p>Som 2</p>
                                        <select className="form-control" id="selectSound2">
                                            <option value="MetroBar0">Metro Bar 0</option>
                                            <option value="MetroBeat0">Metro Beat 0</option>
                                            <option value="MetroBar1">Metro Bar 1</option>
                                            <option value="MetroBeat1">Metro Beat 1</option>
                                            <option value="MetroBar2">Metro Bar 2</option>
                                            <option value="MetroBeat2">Metro Beat 2</option>
                                            <option value="MetroBar3">Metro Bar 3</option>
                                            <option value="MetroBeat3">Metro Beat 3</option>
                                            <option value="MetroBar4">Metro Bar 4</option>
                                            <option value="MetroBeat4">Metro Beat 4</option>
                                        </select>
                                    </div>
                                </div>

                                <Heading bpm={bpm}></Heading>
                                <Slider var1={bpm} var2={this.changeBPM}></Slider>
                                <br />
                                <Button var1={this.togglePlay} var2={aTocar}></Button>
                            </div>
                        </div>
                        <div className='col-md-3 sidebar'>
                            <Sidebar />
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        )
    }

}

export default Metronome