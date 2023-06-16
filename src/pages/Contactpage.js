import React from "react";
import "../style/style.css";
import "../style/bootstrap.min.css";
import Map from "../components/Map";
import Contactus from "../components/Contactus";
import Contactdata from "../components/Contactdata";

function Contactpage(){
    return(
        <>
            <Contactus />
            <Contactdata />
            <Map />
        </>
    )
};
export default Contactpage;