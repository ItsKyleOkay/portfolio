import React from "react";
import Me from "./Styles/img/Me.jpg";
import "./Styles/style.css";
import "./Styles/bootstrap/css/bootstrap.min.css";
import Navbar from "./Navigation/Navbar";

const ProfilePage = () => {
  return (
    <div>
      <Navbar />
      <section className="hero-section" id="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 hero-text-image">
              <div className="row">
                <div className="col-lg-8 text-center text-lg-start">
                  <h1 data-aos="fade-right">
                    Hello My name is Kyle Kretschmer
                  </h1>
                  <p
                    className="mb-5"
                    data-aos="fade-right"
                    data-aos-delay="100"
                  >
                    I have just graduated in information systems and am ready to
                    start my career path
                  </p>
                </div>
                <div className="col-lg-8 iphone-wrap">
                  <img
                    src={Me}
                    alt="Image"
                    data-testid="rocketID"
                    className="phone-1"
                    data-aos="fade-right"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <script src="../Styles/bootstrap/js/bootstrap.bundle.min.jss"></script>
      <script src="../Styles/main.js"></script>
    </div>
  );
};

export default ProfilePage;
