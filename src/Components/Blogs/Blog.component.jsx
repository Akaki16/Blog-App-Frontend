import React from 'react';
import PropTypes from 'prop-types';
import '../../Styles/Blogs/Blog.styles.css';

const Blog = ({ blog, onDelete }) => {
    const { author, title, content } = blog;
    return (
        <div className='blog'>
            <h3>{author}</h3>
            <h2>{title}</h2>
            <article>
                <p>{content}</p>
            </article>
            <hr />
            <div className='blog-btn-container'>
                <button onClick={() => onDelete(blog.id)} type='button'>
                    Delete
                </button>
            </div>
        </div>
    );
}

Blog.defaultProps = {
    blog: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
};

export default Blog;