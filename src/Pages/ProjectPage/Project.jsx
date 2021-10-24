import React from "react";
import "./Project.css";
import Project1 from "../../img/portfolio-1.jpg";
import Project2 from "../../img/portfolio-2.jpg";
import Project3 from "../../img/portfolio-3.jpg";

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Projects</h1>
        <p className="heading p__color">
          Many type of <strong>Projects</strong> I have completed Yet
        </p>
        <p className="heading p__color">
          For production I have created some WordPress Sites
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">WordPress</h5>
                <h4 className="project__text">
                  <strong>carefulsecurity.com</strong>
                </h4>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://carefulsecurity.com"
                  className="project__btn"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">WordPress</h5>
                <h4 className="project__text">
                  <strong>orchardtour.com</strong>
                </h4>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://orchardtour.com"
                  className="project__btn"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project3} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">WordPress</h5>
                <h4 className="project__text">
                  <strong>sekharbasubooks.com</strong>
                </h4>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://sekharbasubooks.com"
                  className="project__btn"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
