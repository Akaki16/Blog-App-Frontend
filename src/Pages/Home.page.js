import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/HomeContainer.styles.css';

const Home = () => {
    return (
        <div className='home-container'>
            <h1>Welcome to Blogs Feed</h1>
            <article>
                <p>
                    Welcome to the Blogs Feed application -
                    Read blogs, create them & update and delete
                </p>
            </article>
            <Link to='/create'>
                <button>
                    Get Started
                </button>
            </Link>
        </div>
    );
}

export default Home;