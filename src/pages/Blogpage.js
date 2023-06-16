import React from "react";
import "../style/style.css";
import "../style/bootstrap.min.css";
import Blog1 from "../components/Blog1"
import Blog2 from "../components/Blog2"
import Client from "../components/Client";
import Blogcard from "../components/Blogcard";

function Blogpage(){
    return(
        <>
        <Blog1 />
        <Client />
        <Blogcard />
        <Blog2 />
        </>
    )
};
export default Blogpage;