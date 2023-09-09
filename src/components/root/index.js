import React from 'react';
import Navigation from '../navigation';
// import Outlet
import {Outlet} from 'react-router-dom';

const Root = () => {
    return (
        <>
            <Navigation/>
            <Outlet></Outlet>
        </>
    );
};

export default Root;