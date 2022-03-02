import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/CreateBlog.styles.css';

const CreateBlog = ({
    onSubmit,
    handleAuthor,
    handleAuthorChange,
    handleTitle,
    handleTitleChange,
    handleContent,
    handleContentChange
}) => {
    return (
        <div>
            <br />
            <br />
            <h1 style={{ 
                textAlign: 'center',
                color: '#333'
            }}>Create New Blog</h1>
                <form onSubmit={onSubmit} className='blog-form'>
                <div className='form-group'>
                    <label htmlFor='author'>Author</label>
                    <input
                        type='text'
                        autoComplete='off'
                        placeholder='Enter author name'
                        value={handleAuthor}
                        onChange={handleAuthorChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='title'>Title</label>
                    <input
                        type='text'
                        autoComplete='off'
                        placeholder='Enter blog title'
                        value={handleTitle}
                        onChange={handleTitleChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='content'>Content</label>
                    <textarea value={handleContent} onChange={handleContentChange} placeholder='Enter blog content' required></textarea>
                </div>
                <div className='form-group'>
                    <button type='submit'>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

CreateBlog.defaultProps = {
    onSubmit: PropTypes.func.isRequired,
    handleAuthor: PropTypes.string.isRequired,
    handleAuthorChange: PropTypes.func.isRequired,
    handleTitle: PropTypes.string.isRequired,
    handleTitleChange: PropTypes.func.isRequired,
    handleContent: PropTypes.string.isRequired,
    handleContentChange: PropTypes.func.isRequired
};

export default CreateBlog;