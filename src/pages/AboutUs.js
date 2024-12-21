import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./AboutUs.css";
import "../assets/2021-22.jpeg"

export default function AboutUs() {
  const [contentVisible, setContentVisible] = useState(false);
  useEffect(() => {
    // Use a setTimeout to delay the visibility of content after the cracks animation
    setTimeout(() => {
      setContentVisible(true);
    }, 2500); // Adjust the delay as needed
  }, []);

  return (
    <div className="mainbody">
      <div className="landing">
        <h1 data-text="So, who are we?">
          <span>So, who are we?</span>
        </h1>
      </div>

      <div className={`content ${contentVisible ? "fade-in" : ""}`}>
        <p>
          <b>We</b> are 'Team TechnoInformals', the official management and fun
          cluster of SASTRA. Within our college, we hold a prominent position,
          orchestrating a dynamic blend of technical and non-technical events.
          <br />
          <br />
          Our spectrum ranges from intra-college celebrations like 'Utsav' and
          'Carpe-Diem', to inter-college extravaganzas such as 'Kuruksastra' and
          'Daksh.'
          <br />
          <br />
          From conceiving innovative ideas to crafting captivating event
          posters, conducting promotional campaigns to engage participants,
          overseeing seamless event logistics on the day, and ensuring that our
          audience departs with valuable insights,
          <br />
        </p>
        <div className="highlight">
          <p>we do it all!</p>
        </div>
      </div>
      <div className="batchpics"
          data-aos="zoom-in-up">
      <Carousel showThumbs={false}>
                <div>
                    <img src={require("../assets/2023-24.jpeg") }/>
                    <p className="legend">Batch of 2023-24</p>
                </div>
                <div>
                    <img src={require("../assets/2022-23.jpg") }/>
                    <p className="legend">Batch of 2022-23</p>
                </div>
                <div>
                    <img src={require("../assets/2021-22.jpeg") }/>
                    <p className="legend">Batch of 2021-22</p>
                </div>
            </Carousel>
            </div>
      
    </div>
  );
}
