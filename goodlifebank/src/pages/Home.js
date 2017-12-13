import React from "react";
import Banner from "../components/Banner";
import Homeadvertsfilter from "../components/Homeadvertsfilter";
import Homeadvertitem1 from "../components/Homeadvertitem1";
import Homeadvertitem2 from "../components/Homeadvertitem2";
import Homeadvertitem3 from "../components/Homeadvertitem3";
import Homeadvertitem4 from "../components/Homeadvertitem4";

//import Container from "../components/Container";
//import Row from "../components/Row";
//import Col from "../components/Col";

const Home = () =>
  <div>
    <Banner />
    <section className="sectioned section-white">
      <div className="container">
      <Homeadvertsfilter />
      <div className="div-spacer m-b-2"></div>
        <div id="home-adverts-holder">
          <div className="row">
            <div className="col-md-6 col-lg-3 match-height-reset" data-mh="home-adverts">
              <Homeadvertitem1 />
              <div className="div-spacer m-y-1 p-y-1 hidden-lg-up"></div>
            </div>

            <div className="col-md-6 col-lg-3 match-height-reset" data-mh="home-adverts">
              <Homeadvertitem2 />
              <div className="div-spacer m-y-1 p-y-1 hidden-lg-up"></div>
            </div>

            <div className="col-md-6 col-lg-3 match-height-reset" data-mh="home-adverts">
              <Homeadvertitem3 />
              <div className="div-spacer m-y-1 p-y-1 hidden-lg-up"></div>
            </div>

            <div className="col-md-6 col-lg-3 match-height-reset" data-mh="home-adverts">
              <Homeadvertitem4 />
              <div className="div-spacer m-y-1 p-y-1 hidden-lg-up"></div>
            </div>

          </div>
        </div>
      </div>
      </section>
      </div>;

export default Home;
