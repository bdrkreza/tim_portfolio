import React from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";

export default function JavaScriptBlogCard({ data }) {
  const { title, img, description } = data.blog;
  return (
    <>
      <article class="blog-card floating mt-5">
        <div class="blog-card__background">
          <div class="card__background--wrapper">
            <div
              class="card__background--main"
              style={{
                minHeight: "600px",
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center top",
              }}
            >
              <div class="card__background--layer"></div>
            </div>
          </div>
        </div>
        <div class="blog-card__head">
          <span class="date__box">
            <span class="date__day">11</span>
            <span class="date__month">JAN</span>
          </span>
        </div>
        <div class="blog-card__info bg-gradient-default">
          <h4 className="text-cyan">{title}</h4>
          <p>
            <a href="#" class="icon-link mr-3 text-blue">
              <i class="fa fa-pencil-square-o"></i> Tony Jahson
            </a>
            <a href="#" class="icon-link text-darker">
              <i class="fa fa-comments-o"></i> 150
            </a>
          </p>
          <p>
            <ReactReadMoreReadLess
              charLimit={200}
              readMoreText={"Read more ▼"}
              readLessText={"Read less ▲"}
              readMoreClassName="read-more-less--more"
              readLessClassName="read-more-less--less"
            >
              {description}
            </ReactReadMoreReadLess>
          </p>
        </div>
      </article>
    </>
  );
}
