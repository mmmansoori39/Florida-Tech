import React, { Component } from "react";
import { Outlet, Navigate } from "react-router-dom";

function Protected(props){
    const {component}= props;
    return(
        <>
            <Component />
        </>
    )
};
export default Protected;