import React from "react"
//import { Link } from 'react-router-dom';
import web45 from "../../assets/images/web45.jpg"

import medi43 from "../../assets/images/medi43.jpg"

import cust4six from "../../assets/images/cust4six.jpg"
import digi48 from "../../assets/images/digi48.jpg"
import vr50 from "../../assets/images/vr50.jpg"
import ai53 from "../../assets/images/ai53.jpg"

class WhyWeDifferent extends React.Component {
  openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks
    tabcontent = document.getElementsByClassName("tab-panel")
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none"
    }

    tablinks = document.getElementsByClassName("tablinks")
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" checked", "")
    }

    document.getElementById(tabNmae).style.display = "block"
    evt.currentTarget.className += " checked"
  }

  render() {
    return (
      <section id="myservices" className="why-we-different ptb-80 bg-f6f6f6">
        <div className="container">
          <div className="section-title">
            <h2>
              Our <span>Services</span>
            </h2>
            {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, se
                        d do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>*/}
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="tabset">
                {/* <!-- Tab 1 --> */}
                <label onClick={(e) => this.openTabSection(e, "Web-Mobile")} className="tablinks checked" name="tabset" id="tab1" aria-controls="Web-Mobile" htmlFor="tab1">
                  Web , Mobile
                </label>
                {/* <!-- Tab 2 --> */}
                <label onClick={(e) => this.openTabSection(e, "health-care-services")} className="tablinks" name="tabset" id="tab2" aria-controls="health-care-services" htmlFor="tab2">
                  Health Care Services
                </label>
                {/* <!-- Tab 3 --> */}
                <label onClick={(e) => this.openTabSection(e, "customer-software")} className="tablinks" name="tabset" id="tab3" aria-controls="customer-software" htmlFor="tab3">
                  Customer Software Services
                </label>
                {/* <!-- Tab 4 --> */}
                <label onClick={(e) => this.openTabSection(e, "digital-media-marketing")} className="tablinks" name="tabset" id="tab4" aria-controls="digital-media-marketing" htmlFor="tab4">
                  Digital Media Marketing
                </label>

                <label onClick={(e) => this.openTabSection(e, "ar-vr")} className="tablinks" name="tabset" id="tab3" aria-controls="ar-vr" htmlFor="tab3">
                  AR,VR Services
                </label>

                <label onClick={(e) => this.openTabSection(e, "other")} className="tablinks" name="tabset" id="tab3" aria-controls="other" htmlFor="tab3">
                  AI development & Other Services
                </label>

                <div className="tab-panels">
                  <section id="Web-Mobile" className="tab-panel" style={{ display: "block" }}>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="why-we-different-text">
                          <p>Web and Mobile development are in the top gear as everyone are attached to them in every minute and there are become a part of our life style ,we provide services for them with latest technologies mentioned below</p>
                          <ul>
                            <li>
                              <i className="fa fa-check"></i>React.js,Angular.js,Angular with latest technologies as gatsby.js and next.js in web development
                            </li>
                            <li>
                              <i className="fa fa-check"></i>React Native , Ionic for the hybrid app development where we can run them on both ios and android devices with single code
                            </li>
                            <li>
                              <i className="fa fa-check"></i>IOS development with swift
                            </li>
                            <li>
                              <i className="fa fa-check"></i>Android development with kotlin
                            </li>
                            <li>
                              <i className="fa fa-check"></i>Serverless application development
                            </li>
                            <li>
                              <i className="fa fa-check"></i>Applications with HTML5,CSS3,Javacript
                            </li>
                            <li>
                              <i className="fa fa-check"></i>Progressive web apps
                            </li>
                          </ul>

                          {/*<Link to="#" className="btn btn-primary">Read More</Link>*/}
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="why-we-different-img">
                          <img src={web45} alt="img" />
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="health-care-services" className="tab-panel">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="why-we-different-text">
                          <p>We provide end to end revenue cycle process utilizing multiple billing systems</p>
                          <ul>
                            <li>
                              <i className="fa fa-check"></i>Revenue Cycle Managment
                            </li>
                            <li>
                              <i className="fa fa-check"></i>Medical Billing
                            </li>
                            <li>
                              <i className="fa fa-check"></i>Medical Coding
                            </li>
                            <li>
                              <i className="fa fa-check"></i>Evaluation and Managment
                            </li>
                            <li>
                              <i className="fa fa-check"></i>Patient Interaction
                            </li>
                            <li>
                              <i className="fa fa-check"></i>Analytics
                            </li>
                            {/*<li><i className="fa fa-check"></i>Awesome Design</li>
                    <li><i className="fa fa-check"></i>Digital Marketing & Branding</li>*/}
                          </ul>

                          {/*<Link to="#" className="btn btn-primary">Read More</Link>*/}
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="why-we-different-img">
                          <img src={medi43} alt="img" />
                        </div>
                      </div>
                    </div>
                  </section>
                  <section id="customer-software" className="tab-panel">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="why-we-different-text">
                          <p>Now-a-days for every bussiness they need there own application to reach the maxmium number of customers .Customer centric software services are which we provide solutions to bussinesses that most needed by the owner and develop user friendly interface with React , Angular and python </p>
                          <ul>
                            <li>
                              <i className="fa fa-check"></i>UI & UX development
                            </li>
                            <li>
                              <i className="fa fa-check"></i>Custom Enterprise Solutions with Extensive UX/UI
                            </li>
                            <li>
                              <i className="fa fa-check"></i>Enterprise resource planning apps
                            </li>
                            <li>
                              <i className="fa fa-check"></i>Application modernization
                            </li>
                            <li>
                              <i className="fa fa-check"></i>Data visualization software
                            </li>
                            <li>
                              <i className="fa fa-check"></i>Digital Marketing & Branding
                            </li>
                          </ul>

                          {/* <Link to="#" className="btn btn-primary">Read More</Link>*/}
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="why-we-different-img">
                          <img src={cust4six} alt="img" />
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="digital-media-marketing" className="tab-panel">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="why-we-different-text">
                          <p>Marketing plays a key role in making any product to reach the audience Here we choose the path of digital media resources to reach out the public by the following services</p>
                          <ul>
                            <li>
                              <i className="fa fa-check"></i>Search engine optimization popularily SEO
                            </li>
                            <li>
                              <i className="fa fa-check"></i>Social media marketing like facebook, Twitter ,Instagram , Youtube , Pinterest , Linkedin marketing{" "}
                            </li>
                            <li>
                              <i className="fa fa-check"></i>Email marketing
                            </li>
                            <li>
                              <i className="fa fa-check"></i>Google adwords and Google anlaytics
                            </li>
                            <li>
                              <i className="fa fa-check"></i>Podcast bloging marketing
                            </li>
                            <li>
                              <i className="fa fa-check"></i>Branding and creating an identity
                            </li>
                          </ul>

                          {/*<Link to="#" className="btn btn-primary">Read More</Link>*/}
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="why-we-different-img">
                          <img src={digi48} alt="img" />
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="ar-vr" className="tab-panel">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="why-we-different-text">
                          <p>Argumented reality and Virtual reality are the two new glasses to our eyes which can change the world around us and approach we take in solving a problem we are in ar and vr development and research to offer the services</p>
                          <ul>
                            <li>
                              <i className="fa fa-check"></i>VR.js A-Frame
                            </li>
                            <li>
                              <i className="fa fa-check"></i>AR.js A-Frame{" "}
                            </li>
                            <li>
                              <i className="fa fa-check"></i>AR kit development
                            </li>
                            <li>
                              <i className="fa fa-check"></i>AR for education,events,Interior design
                            </li>
                            <li>
                              <i className="fa fa-check"></i>VR for real-estate,training,e-commerence
                            </li>
                            <li>
                              <i className="fa fa-check"></i>VR development for google sandbox and ARCore
                            </li>
                          </ul>

                          {/* <Link to="#" className="btn btn-primary">Read More</Link>*/}
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="why-we-different-img">
                          <img src={vr50} alt="img" />
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="other" className="tab-panel">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="why-we-different-text">
                          <p>Artifical intelligance is the platform that can change the lifestyle of the people in near future so we offer our services to get most of it and also offer services with latest technologies and resources</p>
                          <ul>
                            <li>
                              <i className="fa fa-check"></i>Computer vision
                            </li>
                            <li>
                              <i className="fa fa-check"></i>Chatbots
                            </li>
                            <li>
                              <i className="fa fa-check"></i>Blockchain based solutions
                            </li>
                            <li>
                              <i className="fa fa-check"></i>QA and software testing
                            </li>
                            <li>
                              <i className="fa fa-check"></i>Social media apps
                            </li>
                            <li>
                              <i className="fa fa-check"></i>Data visualization
                            </li>
                            <li>
                              <i className="fa fa-check"></i>Video Chats
                            </li>
                            <li>
                              <i className="fa fa-check"></i>IT staff augmentation
                            </li>
                          </ul>

                          {/*<Link to="#" className="btn btn-primary">Read More</Link>*/}
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="why-we-different-img">
                          <img src={ai53} alt="img" />
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default WhyWeDifferent
