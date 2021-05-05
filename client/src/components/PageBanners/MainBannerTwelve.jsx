import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Particles from 'react-particles-js';
import Typewriter from 'typewriter-effect';

const particleOpt = {
    particles: {
        number: {
            value: 160,
            density: {
                enable: false
            }
        },
        size: {
            value: 10,
            random: true
        },
        move: {
            direction: "bottom",
            out_mode: "out",
            speed: 2,
        },
        line_linked: {
            enable: false
        }
    },
    interactivity: {
        events: {
            onclick: {
                enable: true,
                mode: "repulse"
            }
        },
        modes: {
            repulse:{
                distance: 200,
                duration: 0.4
            }
        }
    }
}
 
class MainBanner extends React.Component {
    render(){
        return (
            <div id="home" className="main-banner item-bg-one">
                <Particles
                    params={{...particleOpt}}
                />
                <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="main-banner-text">
                                    <h4>We innovate next big thing</h4>
                                    <h1>We Are 
                                        <Typewriter
                                            options={{
                                                strings: [  'Innovators.' ,'Virtual' ,'Simple.', 'Creative.','Unique.' , 'Professional.','Passionate.', 'Ahead Of Time'],
                                                autoStart: true,
                                                loop: true, 
                                            }}
                                        />
                                    </h1>
                                    <p>We are here to do the awessome things know about us by get started into the ride of innovative garden</p>
                                     <p>Collabrate and become a epot for this technological garden by Join Us</p>
                                    <AnchorLink href="#welcome" className="btn btn-primary">Get Started</AnchorLink>
                                    <AnchorLink href="#contact" className="btn btn-primary view-work">Join Us</AnchorLink>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default MainBanner;