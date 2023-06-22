/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Special from '../Special/Special';

const Myself = ({ring}) => {
    return (
        <div>
            <h3>Myself</h3>
            <Special ring={ring}></Special>
        </div>
    );
};

export default Myself;