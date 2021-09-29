import { blogData } from "assets/FakeData/BlogData";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import BlogCard from "./BlogCard";
import BlogHeder from "./BlogHeder";
import JavaScriptBlogCard from "./JavaScriptBlogCard";
import ReactBlogCard from "./ReactBlogCard";

export default function Blog() {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(3);
  const [javaVisible, setJavaVisible] = useState(3);
  const [reactVisible, setReactVisible] = useState(3);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  const showMoreJavaItems = () => {
    setJavaVisible((prevValue) => prevValue + 3);
  };

  const showMoreReactItems = () => {
    setReactVisible((prevValue) => prevValue + 3);
  };

  useEffect(() => {
    setItems(blogData);
  }, []);
  return (
    <>
      <div>
        <img
          alt="..."
          className="path h-100 w-100"
          src={require("assets/img/blob.png").default}
        />
        <BlogHeder />

        {/* Blog Container */}
        <Container className="mt--9">
          <Row>
            {items.slice(0, visible).map((item) => (
              <Col md="4">
                <BlogCard data={item} />
              </Col>
            ))}
          </Row>
          <a
            href
            onClick={() => showMoreItems()}
            class="btn Blog_btn  btn--with-icon bg-gradient-teal"
          >
            <i class="btn-icon fa fa-long-arrow-right bg-gradient-indigo"></i>
            Load Mores Article
          </a>
        </Container>
      </div>

      <section className="section section-lg section-safe mt-5">
        <img
          alt="..."
          className="path w-100 h-100"
          src={require("assets/img/path5.png").default}
        />
        {/* ReactBlog Container */}
        <Container>
          <Row>
            {items.slice(0, reactVisible).map((item) => (
              <Col sm="12" md="12">
                <ReactBlogCard data={item} />
              </Col>
            ))}
          </Row>
          <a
            href
            onClick={() => showMoreReactItems()}
            class="btn Blog_btn  btn--with-icon bg-gradient-teal mt-5"
          >
            <i class="btn-icon fa fa-long-arrow-right bg-gradient-indigo"></i>
            Load Mores Article
          </a>
        </Container>
      </section>

      <section className="section section-lg">
        <img
          alt="..."
          className="path w-100 h-100"
          src={require("assets/img/triunghiuri.png").default}
        />
        {/* Java Blog Container */}
        <Container>
          <Row>
            {items.slice(0, javaVisible).map((item) => (
              <Col sm="12" md="6">
                <JavaScriptBlogCard data={item} />
              </Col>
            ))}
          </Row>
          <a
            href
            onClick={() => showMoreJavaItems()}
            class="btn Blog_btn  btn--with-icon bg-gradient-teal mt-5"
          >
            <i class="btn-icon fa fa-long-arrow-right bg-gradient-indigo"></i>
            Load Mores Article
          </a>
        </Container>
      </section>
    </>
  );
}
