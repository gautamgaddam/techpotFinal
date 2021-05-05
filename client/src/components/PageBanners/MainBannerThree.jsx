import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
 
class MainBanner extends React.Component {
    render(){
        return (
            <React.Fragment>
                <div id="home" class="main-banner">
                    <video loop="" muted="" autoplay="" poster="#" class="video-background" data-reactid=".0.1.0.0">
                        <source data-reactid=".0.1.0.0" src={require("../../assets/video/promo-video.mp4")} type="video/mp4" />
                    </video>
                    <div class="d-table">
                        <div class="d-table-cell">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-12 col-md-12">
                                        <div class="main-banner-text">
                                            <h4>We Are Creative</h4>
                                            <h1>The Best <span>Digital</span> Experience</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            <AnchorLink href="#welcome" class="btn btn-primary">Get Started</AnchorLink>
                                            <AnchorLink href="#work" class="btn btn-primary view-work">View Work</AnchorLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default MainBanner;