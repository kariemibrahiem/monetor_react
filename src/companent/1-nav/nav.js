import { Fragment } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
const Navs = ()=>{
    return(
        <Fragment>
            <nav className="nav">
                <h2>
                    <sup>7</sup>Matrex
                </h2>
                
            <ul class="list_ul">
                <Link to="/home">
                    <li class="list_li">
                        <div class="sp">
                            <a  href="monetor.html" class="links">
                                <button class="ui-btn">
                                    <span class="btn_ui">
                                    HOME 
                                    </span>
                                </button>
                            </a>
                    </div>
                    </li>
                </Link>

                    {/* <li class="list_li">
                        <div class="sp">
                            <a href="./courses/ready project/courses.html" class="links">
                                <button class="ui-btn">
                                    <span class="btn_ui">
                                    COURSES 
                                    </span>
                                </button>
                            </a>
                    </div>
                    </li> */}
                <Link to="/fac">
                    <li class="list_li">
                        <div class="sp">
                            <a  class="links">
                                <button class="ui-btn">
                                    <span class="btn_ui">
                                    faculty
                                    </span>
                                </button>
                            </a>
                    </div>
                    </li>
                </Link>
            </ul>


            </nav>
        </Fragment>
    );
}

export default Navs;