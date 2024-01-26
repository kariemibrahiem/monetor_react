import { Fragment } from "react";
import Navs from "../1-nav/nav";
import Main from "../2-main/main";
import "./home.css"

const Home = () =>{
    return(
        <Fragment>
            <center>
            <Navs/>
            <Main/>
            </center>
        </Fragment>
    );
}
export default Home;