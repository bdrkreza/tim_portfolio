import Contact from "components/Contact/Contact";
import SkillProgress from "Pages/SkillPage/SkillProgress";
// javascript plugin used to create scrollbars on windows
import React from "react";
import { Container } from "reactstrap";
import AboutHeader from "./AboutHeader";

export const carouselItems = [
  {
    src: require("assets/img/denys.jpg").default,
    altText: "Slide 1",
    caption: "Big City Life, United States",
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg").default,
    altText: "Slide 2",
    caption: "Somewhere Beyond, United States",
  },
  {
    src: require("assets/img/mark-finn.jpg").default,
    altText: "Slide 3",
    caption: "Stocks, United States",
  },
];

export default function About() {
  return (
    <>
      <div className="wrapper">
        <div className="d-flex align-items-center justify-content-center mt-5">
          <img
            alt="..."
            className="dots"
            src={require("assets/img/dots.png").default}
          />
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png").default}
          />
          <Container>
            <AboutHeader />
          </Container>
        </div>
        <div className=" d-flex align-items-center justify-content-center  mt-5">
          <img
            alt="..."
            className="path"
            src={require("assets/img/cercuri.png").default}
          />
          <Container>
            <SkillProgress />
          </Container>
        </div>
        <Contact />
      </div>
    </>
  );
}
