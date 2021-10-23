import React from "react";
import "./Blog.css";
import Blog1 from "../../img/blog-01.jpg";
import Blog2 from "../../img/blog-02.jpg";
import Blog3 from "../../img/blog-03.jpg";

function Blog() {
  return (
    <div className="blog component__space" id="Blog">
      <div className="heading">
        <h1 className="heading">React Apps</h1>
        <p className="heading p__color">
          I am currently developing a few apps with React,
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Blog1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h5 className="project__text">Fetch API</h5>
                <h4 className="project__text">Show Fetched data in a table</h4>
                <a
                  target="_blank"
                  href="https://github.com/alifhaider/fetchAPI"
                  className="blog project__btn btn"
                >
                  Github Repo
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Blog2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h5 className="project__text">Social Media Site</h5>
                <h4 className="project__text">
                  A social media site to write posts
                </h4>
                <a target="_blank" href="#" className="blog project__btn btn">
                  Github Repo
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Blog3} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h5 className="project__text">React-Redux Store</h5>
                <h4 className="project__text">
                  E-commerce site with Cart functionalities
                </h4>
                <a target="_blank" href="#" className="blog project__btn btn">
                  Github Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
