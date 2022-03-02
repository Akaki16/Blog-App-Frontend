import React from 'react';
import '../../Styles/Modal/LoadingModal.styles.css';

const LoadingModal = ({ loadingRef }) => {
    return (
        <div style={{ display: 'none' }} ref={loadingRef} className='modal loading-modal'>
            <div className='loader'></div>
        </div>
    );
}

export default LoadingModal;