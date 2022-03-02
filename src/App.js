import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar.component';
import CreateBlogPage from './Pages/CreateBlog.page';
import Home from './Pages/Home.page';
import BlogsPage from './Pages/Blogs.page';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<BlogsPage />} />
        <Route path='/create' element={<CreateBlogPage />} />
      </Routes>
    </Router>
  );
}

export default App;