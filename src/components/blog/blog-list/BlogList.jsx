import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import posts from "../../../data/posts.json";
import BlogItem from "../blog-item/BlogItem";

const BlogList = (props) => {

  const [blog,setBlog]=useState({})

  useEffect(async()=>{
    const response = await fetch(`http://localhost:3001/blog/`)
    const data = await response.json()
    setBlog(data)
  },[])

  return (
    <Row>
      {blog && blog.map( (blg) => (
        <Col key={blg._id}
          md={4}
          style={{
            marginBottom: 50,
          }}
        >
          <BlogItem key={blg.title} {...blg} />
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;
