import React from "react"
import OwlCarousel from "react-owl-carousel3"
import VisibilitySensor from "react-visibility-sensor"
import AnchorLink from "react-anchor-link-smooth-scroll"

const options = {
  items: 1,
  loop: true,
  autoplay: true,
  nav: true,
  responsiveClass: true,
  dots: false,
  autoplayHoverPause: true,
  mouseDrag: true,
  navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
}

class MainBanner extends React.Component {
  render() {
    return (
      <OwlCarousel id="home" className="home-slides owl-theme" {...options}>
        {this.props.slideData.map((data, idx) => (
          <div className={`main-banner ${data.klasName}`} key={idx}>
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <VisibilitySensor>
                        {({ isVisible }) => (
                          <div className="main-banner-text">
                            <h4 className={isVisible ? "animated fadeInDown slow opacityOne" : ""}>{data.heading}</h4>
                            <h1 className={isVisible ? "animated fadeInDown slow opacityOne" : ""} dangerouslySetInnerHTML={{ __html: data.subHeading }} />

                            <p className={isVisible ? "animated fadeInDown slow opacityOne" : ""}>{data.text}</p>
                            <AnchorLink
                              href="#about"
                              className={`
                                                        btn btn-primary ${isVisible ? "animated fadeInDown slow opacityOne" : ""}
                                                    `}
                            >
                              Get Started
                            </AnchorLink>
                            <AnchorLink
                              href="#work"
                              className={`
                                                        btn btn-primary view-work ${isVisible ? "animated fadeInDown slow opacityOne" : ""}
                                                    `}
                            >
                              View Work
                            </AnchorLink>
                          </div>
                        )}
                      </VisibilitySensor>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    )
  }
}

MainBanner.defaultProps = {
  slideData: [
    {
      heading: "We innovate next big thing",
      subHeading: "Nice To <span>Meet</span> You",
      text: "Collabrate and become a epot for the innovative garden by Join Us.",
      klasName: "item-bg-two",
    },
    {
      heading: "We Are Professional",
      subHeading: "Best <span>Digital</span> Experience",
      text: "Collabrate and become a epot for the innovative garden by Join Us.",
      klasName: "item-bg-one",
    },
  ],
}

export default MainBanner
