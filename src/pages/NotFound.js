import React from 'react';
import visibilityModal from '../utils/VisibilityModal';

function NotFound() {
    visibilityModal('hidden');
    return (
        <h1>404: not Found</h1>
    );
}

export default NotFound;