import React, { useState, useEffect, useRef } from 'react';
import CreateBlog from '../Components/CreateBlog.component';
import LoadingModal from '../Components/Modal/LoadingModal.component';
import blogService from '../Services/blogService';

const CreateBlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const loadingRef = useRef(HTMLDivElement);

    useEffect(() => {
        // make HTTP GET request to get all the blogs
        blogService
        .getAll()
        .then(response => {
            setBlogs(response.data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    const submitBlog = (event) => {
        event.preventDefault();

        // define blog object
        const blog = {
            author: author,
            title: title,
            content: content
        };

        for (let i = 0; i < blogs.length; i++) {
            if (blogs[i].title === title) {
                const question = window.confirm(`${blogs[i].title} with this title blog already exsits,Update its fields?`);
                const foundBlog = blogs.find(b => b.id === blogs[i].id);
                const changedBlog = {...foundBlog, author: author, title: title, content: content};
                if (question) {
                    blogService
                    .update(blogs[i].id, changedBlog)
                    .then(response => {
                        setBlogs(blogs.map(b => b.id !== blogs[i].id ? foundBlog : response.data));
                        // redirect to the blogs page
                        setTimeout(() => {
                            loadingRef.current.style.display = 'block';
                            window.location = '/blogs';
                        }, 1000);
                    })
                    .catch(err => {
                        console.log(err);
                    });
                    setBlogs([...blogs]);
                    return;
                }
            }
        }

        if (author !== '' && title !== '' && content !== '') {
            blogService
            .create(blog)
            .then(response => {
                // copy old blog and add new one
                setBlogs([...blogs, response.data]);
            })
            .catch(err => {
                console.log(err);
            });
            // redirect to the blogs page
            setTimeout(() => {
                loadingRef.current.style.display = 'block';
                window.location = '/blogs';
            }, 1000);
        }
    }

    return (
        <div>
            <CreateBlog
                onSubmit={submitBlog}
                handleAuthor={author}
                handleAuthorChange={(e) => setAuthor(e.target.value)}
                handleTitle={title}
                handleTitleChange={(e) => setTitle(e.target.value)}
                handleContent={content}
                handleContentChange={(e) => setContent(e.target.value)}
            />
            <LoadingModal loadingRef={loadingRef} />
        </div>
    );
}

export default CreateBlogPage;