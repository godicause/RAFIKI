import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="rafiki__blog section__padding" id="blog">
    <div className="rafiki__blog-heading">
      <h1 className="rafiki__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="rafiki__blog-container">
      <div className="rafiki__blog-container_groupA">
        <Article imgUrl={blog01} date="june 6, 2023" text="RAFIKI and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className="rafiki__blog-container_groupB">
        <Article imgUrl={blog02} date="june 6, 2023" text="RAFIKI and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog03} date="june 6, 2023" text="RAFIKI and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog04} date="june 6, 2023" text="RAFIKI and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog05} date="june 6, 2023" text="RAFIKI and Open  AI is the future. Let us exlore how it is?" />
      </div>
    </div>
  </div>
);

export default Blog;
