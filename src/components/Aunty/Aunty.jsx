/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Cusin from '../Cusin/Cusin';

const Aunty = ({ring}) => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className='flex'>
                <Cusin>Abir</Cusin>
                <Cusin hasFriend={true} ring={ring}>Nabir</Cusin>
            </section>
        </div>
    );
};

export default Aunty;