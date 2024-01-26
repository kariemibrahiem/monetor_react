import { Fragment } from "react";
import Navs from "../1-nav/nav";
import Vid from "./vid";
import { Link } from "react-router-dom";

const Pages = () =>{
    return(
        <Fragment>
            <Navs/>
            <div className="main">
                <Link to=""></Link>
            </div>
        </Fragment>
    );
}
export default Pages;