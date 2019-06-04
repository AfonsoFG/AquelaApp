import React, { Component, Fragment } from 'react';
import MetroBar0 from '../assets/sounds/MetroBar0.wav';
import MetroBeat0 from '../assets/sounds/MetroBeat0.wav';
import '../assets/css/App.css';

import { Header, Footer, Sidebar, Slider, Heading, Button  } from './'

class Metronome extends Component {

    constructor(){
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
    
      playClick = () => {
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
            <Header/>
            <div className="container pageBody pageMetronome">
                <div className='row'>
                    <div className='col-md-9 main'>
                        <div className="slideContainer">
							<h3>Metronome</h3>
							<div className="row">
								<div className='col-md-6'>
									<p>Som 1</p>
									<select>
										<option value="MetroBar0.wav">Metro Bar 0</option>
										<option value="MetroBeat0.wav">Metro Beat 0</option>
										<option value="MetroBar1.wav">Metro Bar 1</option>
										<option value="MetroBeat1.wav">Metro Beat 1</option>
										<option value="MetroBar2.wav">Metro Bar 2</option>
										<option value="MetroBeat2.wav">Metro Beat 2</option>
										<option value="MetroBar3.wav">Metro Bar 3</option>
										<option value="MetroBeat3.wav">Metro Beat 3</option>
										<option value="MetroBar4.wav">Metro Bar 4</option>
										<option value="MetroBeat4.wav">Metro Beat 4</option>
									</select>
								</div>
								<div className='col-md-6'>
									<p>Som 2</p>
									<select>
										<option value="MetroBar0.wav">Metro Bar 0</option>
										<option value="MetroBeat0.wav">Metro Beat 0</option>
										<option value="MetroBar1.wav">Metro Bar 1</option>
										<option value="MetroBeat1.wav">Metro Beat 1</option>
										<option value="MetroBar2.wav">Metro Bar 2</option>
										<option value="MetroBeat2.wav">Metro Beat 2</option>
										<option value="MetroBar3.wav">Metro Bar 3</option>
										<option value="MetroBeat3.wav">Metro Beat 3</option>
										<option value="MetroBar4.wav">Metro Bar 4</option>
										<option value="MetroBeat4.wav">Metro Beat 4</option>
									</select>
								</div>
							</div>
						  
                            <Heading bpm={bpm}></Heading>
                            <Slider var1={bpm} var2={this.changeBPM}></Slider>
                            <br/>
                            <Button var1={this.togglePlay} var2={aTocar}></Button>
                        </div>
                    </div>
                    <div className='col-md-3 sidebar'>
                        <Sidebar/>
                    </div>
                </div>
            </div>
            <Footer/>
        </Fragment>
        )
    }
    
}

export default Metronome