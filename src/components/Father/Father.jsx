/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Father = ({ring}) => {
    return (
        <div>
            <h2>Father</h2>
            <section className='flex'>
                <Myself ring={ring}></Myself>
                <Brother></Brother>
                <Sister/>
            </section>
        </div>
    );
};

export default Father;