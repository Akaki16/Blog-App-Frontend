import React, { useState, useEffect, useRef } from 'react';
import Blogs from '../Components/Blogs/Blogs.component';
import Search from '../Components/Search.component';
import blogService from '../Services/blogService';
import LoadingModal from '../Components/Modal/LoadingModal.component';

const BlogsPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const loadingRef = useRef(HTMLDivElement);

    useEffect(() => {
        loadingRef.current.style.display = 'block';
        blogService
        .getAll()
        .then(response => {
            setBlogs(response.data);
        })
        .catch(err => {
            console.log(err);
        });
        loadingRef.current.style.display = 'none';
    }, []);

    const handleSearch = (e) => {
        const searchValue = e.target.value;
        // filter blogs based on blog title
        const filtered_blogs = blogs.filter(blog => {
            return blog.title.toLowerCase().includes(searchValue.toLowerCase());
        });
        // set filtered blogs
        setFilteredBlogs(filtered_blogs);
    }

    const deleteBlog = (id) => {
        // make HTTP DELETE request to delete blog on the server
        blogService
        .deleteItem(id)
        .then(response => {
            setBlogs(blogs.filter(blog => blog.id !== id));
            setFilteredBlogs(filteredBlogs.filter(fBlog => fBlog.id !== id));
        })
        .catch(err => {
            console.log(err);
        });
    }

    return (
        <div>
            <Search onKeyUp={handleSearch} />
            <br />
            <Blogs
                blogs={filteredBlogs.length > 0 ? filteredBlogs : blogs}
                onDelete={deleteBlog}
            />
            <LoadingModal loadingRef={loadingRef} />
        </div>
    );
}

export default BlogsPage;