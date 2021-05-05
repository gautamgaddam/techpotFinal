import React from "react"
import clientImgOne from "../../assets/images/client-avatar1.jpg"
import clientImgTwo from "../../assets/images/client-avatar2.jpg"
import clientImgThree from "../../assets/images/client-avatar3.jpg"

class Testimonial extends React.Component {
  render() {
    return (
      <section className="testimonials-area ptb-80 bg-f6f6f6">
        <div className="container">
          <div className="section-title">
            <h2>
              Our Clients <span>Feedback</span>
            </h2>
            <p>Feedbacks makes us to know about our efforts we made to fulfill the idealogies of the clients and in any stage of the company these acts as the boosters for the team for their team work.</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-feedback">
                <div className="client-info">
                  <div className="client-pic">
                    <img src={clientImgThree} alt="client-avatar" />
                  </div>

                  <div className="client-title">
                    <h4>Veerendra Madukuri</h4>
                    <h5>CEO of AMG designs and constructions</h5>
                  </div>
                </div>

                <p>techpot is the place where we can unleash your idealogies to next level the approach they make in problem solving is very effective and quite simple they make solutions in aunique way that our product standsalone in market and have good team that works collectively and gives us support in any issue at any time </p>

                <span>
                  <i className="fa fa-quote-left"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Testimonial
