import React from "react";
import "../style/style.css";
import "../style/bootstrap.min.css";
import Bookdetails from "../components/Bookdetails";
import Relatedbooks from "../components/Relatedbooks";

function Bookdetailspage(){
    return(
        <>
            <Bookdetails />
            <Relatedbooks />
        </>
    )
};
export default Bookdetailspage;