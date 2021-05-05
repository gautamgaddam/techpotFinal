import React from "react"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"
import { Link } from "react-router-dom"
import mixitup from "mixitup"

const images = [require("../../assets/images/amg2six.jpg"), require("../../assets/images/epaper47.jpg"), require("../../assets/images/reciep53.jpg"), require("../../assets/images/newsapp51.jpg"), require("../../assets/images/newsm52.jpg"), require("../../assets/images/newsmobs51.jpg"), require("../../assets/images/c44.jpg"), require("../../assets/images/cus47.jpg"), require("../../assets/images/vr51.jpg"), require("../../assets/images/cel42.jpg")]

class Work extends React.Component {
  state = {
    photoIndex: 0,
    isOpen: false,
  }

  componentDidMount() {
    mixitup("#mix-wrapper", {
      animation: {
        effects: "fade rotateZ(0deg)",
        duration: 700,
      },
      classNames: {
        block: "programs",
        elementFilter: "filter-btn",
      },
      selectors: {
        target: ".mix-target",
      },
    })
  }

  render() {
    const { photoIndex, isOpen } = this.state
    return (
      <section className="work-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>
              Our <span>Work</span>
            </h2>
            <p>These are some of our works that were completed and some of them are in development , this shows the world that what we are going to accomplish and our clear vision about projects with which we are going to make the next big thing.</p>
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="shorting-menu">
                <button className="filter" data-filter="all">
                  All
                </button>
                <button className="filter" data-filter=".web">
                  Web
                </button>
                <button className="filter" data-filter=".mobile">
                  Mobile
                </button>
                <button className="filter" data-filter=".others">
                  More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="shorting">
          <div className="row m-0" id="mix-wrapper">
            <div className="col-lg-4 col-md-6 mix web p-0 mix-target">
              <div className="single-work">
                <img src={images[0]} alt="work-img" />

                <div className="work-content">
                  <h4>AMG design & constructions</h4>
                  <ul>
                    <p>AMG was a contruction company which offer services in architecture, engineering,construction managment located in hyderabad.</p>
                  </ul>
                </div>

                <Link to="#" className="popup-btn" onClick={() => this.setState({ photoIndex: 0, isOpen: true })}>
                  <i className="fa fa-plus"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mix web p-0 mix-target">
              <div className="single-work">
                <img src={images[1]} alt="work-img" />

                <div className="work-content">
                  <h4>NewsPoT</h4>
                  <p>It is about politicial , movie and sports news web application using react</p>
                </div>

                <Link to="#" className="popup-btn" onClick={() => this.setState({ photoIndex: 1, isOpen: true })}>
                  <i className="fa fa-plus"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mix web p-0 mix-target">
              <div className="single-work">
                <img src={images[2]} alt="work-img" />

                <div className="work-content">
                  <h4>REciePz</h4>
                  <p>This web application is about food recieps blog that were posted by users and have many secret ancient recieps one have to try</p>
                </div>

                <Link to="#" className="popup-btn" onClick={() => this.setState({ photoIndex: 2, isOpen: true })}>
                  <i className="fa fa-plus"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mix mobile p-0 mix-target">
              <div className="single-work">
                <img src={images[3]} alt="work-img" />

                <div className="work-content">
                  <h4>Notice board</h4>
                  <p>Mobile app which integrates the latest ads and the platform for products to get close to audience and latest updates of your interests also get noted by your e-banners by your friends,our aim is to replaces the traditional banners and placards in every city</p>
                </div>

                <Link to="#" className="popup-btn" onClick={() => this.setState({ photoIndex: 3, isOpen: true })}>
                  <i className="fa fa-plus"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mix mobile p-0 mix-target">
              <div className="single-work">
                <img src={images[4]} alt="work-img" />

                <div className="work-content">
                  <h4>couFon</h4>
                  <p>It is a place were we you get the best offers around the city and make save your money in food,dinning,drinks,pubs,events,lifestyle and etc</p>
                </div>

                <Link to="#" className="popup-btn" onClick={() => this.setState({ photoIndex: 4, isOpen: true })}>
                  <i className="fa fa-plus"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mix mobile p-0 mix-target">
              <div className="single-work">
                <img src={images[5]} alt="work-img" />

                <div className="work-content">
                  <h4>GroUpeD</h4>
                  <p>This Mobile app is a second home for users where they can create groups which they desired and can organise events payments data storage of particular group and their celebrations.</p>
                </div>

                <Link to="#" className="popup-btn" onClick={() => this.setState({ photoIndex: 5, isOpen: true })}>
                  <i className="fa fa-plus"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mix mobile p-0 mix-target">
              <div className="single-work">
                <img src={images[6]} alt="work-img" />

                <div className="work-content">
                  <h4>MovIe PoT</h4>
                  <p>Get the latest intreviews updates and daily activites of your favourite stars and interact with them also get new experience in watching movies with our monthly theatre pass feature.</p>
                </div>

                <Link to="#" className="popup-btn" onClick={() => this.setState({ photoIndex: 3, isOpen: true })}>
                  <i className="fa fa-plus"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mix others p-0 mix-target">
              <div className="single-work">
                <img src={images[7]} alt="work-img" />

                <div className="work-content">
                  <h4>Pay PoT</h4>
                  <p>A payment solution for all business activities where customer and the owner of the particular business interact with same interface</p>
                </div>

                <Link to="#" className="popup-btn" onClick={() => this.setState({ photoIndex: 3, isOpen: true })}>
                  <i className="fa fa-plus"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mix others p-0 mix-target">
              <div className="single-work">
                <img src={images[8]} alt="work-img" />

                <div className="work-content">
                  <h4>FoolerY</h4>
                  <p>Its about rhymes,stories,characters that will come into reality the application which will not only give knowledge and entertainment for kids but also to adults will be addicted to it for sure.</p>
                </div>

                <Link to="#" className="popup-btn" onClick={() => this.setState({ photoIndex: 3, isOpen: true })}>
                  <i className="fa fa-plus"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mix others p-0 mix-target">
              <div className="single-work">
                <img src={images[9]} alt="work-img" />

                <div className="work-content">
                  <h4>EvEnt PoT</h4>
                  <p>Organises the events parties and celebrations of your life by arranging all the needs to get the event colorful like drinks,food,themed photoshoots etc and give a life to memories.</p>
                </div>

                <Link to="#" className="popup-btn" onClick={() => this.setState({ photoIndex: 3, isOpen: true })}>
                  <i className="fa fa-plus"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            imageTitle={photoIndex + 1 + "/" + images.length}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </section>
    )
  }
}

export default Work
