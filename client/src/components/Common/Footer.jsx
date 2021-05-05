import React from "react"
import { Link } from "react-router-dom"

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h4>
                <Link to="/">
                  <span>tech</span>pot
                </Link>
              </h4>
              <ul>
                <li>
                  <Link to="#" className="fa fa-facebook"></Link>
                </li>
                <li>
                  <Link to="#" className="fa fa-twitter"></Link>
                </li>
                <li>
                  <Link to="#" className="fa fa-skype"></Link>
                </li>
                <li>
                  <Link to="#" className="fa fa-instagram"></Link>
                </li>
                <li>
                  <Link to="#" className="fa fa-linkedin"></Link>
                </li>
              </ul>
              <div className="privacy">
                <Link to="#">Terms of Privacy and Policy</Link>
              </div>
              <p>
                Copyright <i className="fa fa-copyright"></i>techpot media and it services 2019 All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
