import React from "react";
import "../style/style.css";
import "../style/bootstrap.min.css";
import Slideimg from "../components/Slideimg";
import Homeafterslide from "../components/Homeafterslide";
import Progress from "../components/Progress";
import Homemember from "../components/Homemember"

function Homepage(){
    return(
        <>
            <Slideimg />
            <Homeafterslide />
            <Progress />
            <Homemember />
        </>
    )
};
export default Homepage;