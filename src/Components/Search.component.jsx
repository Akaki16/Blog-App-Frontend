import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Search.styles.css';

const Search = ({ onKeyUp }) => {
    return (
        <div className='search'>
            <input
                type='text'
                autoFocus
                placeholder='Enter a blog title'
                onKeyUp={onKeyUp}
            />
        </div>
    );
}

Search.propTypes = {
    onKeyUp: PropTypes.func.isRequired
};

export default Search;