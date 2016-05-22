import React, { PropTypes } from "react";
import Post from "./post.jsx";

const Posts = ({ posts }) => (
    <ul>
        {posts.map((post, index) =>
            <Post key={index} post={post} />
        )}
    </ul>
);

Posts.propTypes = {
    posts: PropTypes.array.isRequired
};

export default Posts;
