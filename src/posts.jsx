import React, { PropTypes } from "react";
import Post from "./post.jsx";

const Posts = ({ posts, isFetching }) => {
    const postsIsEmpty = !posts || posts.length === 0;

    if (isFetching && postsIsEmpty) {
        return <h2>LOADING ...</h2>;
    } else if (!isFetching && postsIsEmpty) {
        return <h2>NO DATA</h2>;
    }

    return (
        <ul
            style={{opacity: isFetching ? 0.5 : 1}}
        >
            {posts.map((post, index) =>
                <Post key={index} post={post} />
            )}
        </ul>
    );
};

Posts.propTypes = {
    posts: PropTypes.array,
    isFetching: PropTypes.bool
};

export default Posts;
