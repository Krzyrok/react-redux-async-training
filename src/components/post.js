import React, { PropTypes } from "react";

const Post = ({ post }) => (
    <li>{post.title}</li>
);

Post.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string
    })
};

export default Post;
