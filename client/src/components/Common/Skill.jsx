import React from 'react';
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
import { Link } from 'react-router-dom';
import videoImg from '../../assets/images/video-img.jpg';
 
class Skill extends React.Component {
    state = {
        isOpen: false
    }

    openModal = () => {
        this.setState({isOpen: true})
    }
    render(){
        return (
            <section className="skill-area ptb-80 bg-f6f6f6">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-skill">
                                <div className="section-title">
                                    <h2>Some of Our <span>Skills</span></h2>
                                    <p>To get the better of skills and to set standardise parameter in 
                                    industy best paratices we rate us based on cilent feedbacks our own meetings every three months
                                    for this quater it folows below </p>
                                </div>
                                
                                <h3 className="progress-title">Ui & Ux , Web , Mobile development</h3>
                                <div className="progress">
                                    <div className="progress-bar" style={{width: "97%"}}>
                                        <div className="progress-value">97%</div>
                                    </div>
                                </div>
                                
                                <h3 className="progress-title">Customer Software , Ar&VR developments ,Media Apps</h3>
                                <div className="progress">
                                    <div className="progress-bar" style={{width: "92%"}}>
                                        <div className="progress-value">92%</div>
                                    </div>
                                </div>
                                
                                <h3 className="progress-title">Healthcare Services</h3>
                                <div className="progress">
                                    <div className="progress-bar" style={{width: "90%"}}>
                                        <div className="progress-value">90%</div>
                                    </div>
                                </div>
                                
                                <h3 className="progress-title">Digital Media Marketing ,Enterpise solutions </h3>
                                <div className="progress mb-0">
                                    <div className="progress-bar" style={{width: "95%"}}>
                                        <div className="progress-value">95%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="col-lg-6 col-md-12">
                            <div className="skill-video">
                                <img src={videoImg} alt="video-img" />
                                <div className="video-btn">
                                    <Link 
                                        onClick={e => {e.preventDefault(); this.openModal()}}
                                        to="#" 
                                        className="popup-youtube"
                                    >
                                        <i className="fa fa-play"></i>
                                    </Link>
                                    <ModalVideo 
                                        channel='youtube' 
                                        isOpen={this.state.isOpen} 
                                        videoId='bk7McNUjWgw' 
                                        onClose={() => this.setState({isOpen: false})} 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Skill;