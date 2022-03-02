import React from 'react';
import PropTypes from 'prop-types';
import Blog from './Blog.component';
import '../../Styles/Blogs/Blogs.styles.css';

const Blogs = ({ blogs, onDelete }) => {
    return (
        <div className='blog-list'>
            {blogs.map((blog, idx) => {
                return (
                    <Blog
                        key={blog.id}
                        blog={blog}
                        onDelete={onDelete}
                    />
                );
            })}
        </div>
    );
}

Blogs.defaultProps = {
    blogs: PropTypes.array.isRequired
};

export default Blogs;