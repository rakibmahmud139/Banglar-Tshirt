/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Friend = ({ring}) => {
    return (
        <div>
            <h3>Friend</h3>
            {ring && <p><small>Ring : {ring}</small></p>}
        </div>
    );
};

export default Friend;