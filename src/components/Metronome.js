import React, { Component, Fragment } from 'react';
import Som1 from '../assets/sounds/click1.wav';
import Som2 from '../assets/sounds/click2.wav';
import '../assets/css/App.css';

import { Header, Footer, Sidebar, Slider, Heading, Button  } from './'

class Metronome extends Component {

    constructor(){
        super();
    
        this.state = {
          aTocar: false,
          bpm: 100
        }
    
        this.som1 = new Audio(Som1);
        this.som2 = new Audio(Som2);
    
        this.beatNumber = 0;
      }

      componentWillUnmount() {
        if (this.state.aTocar) {
          this.togglePlay();
        }
      }
    
      playClick = () => {
        if (this.beatNumber === 0) {
          this.som2.play();
        } else {
          this.som1.play();
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
            <div class="container pageBody pageMetronome">
                <div className='row'>
                    <div className='col-md-9 main'>
                        <div className="slideContainer">
                          <h3>Metronome</h3>
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