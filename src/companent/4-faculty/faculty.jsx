import { Fragment } from "react";
import Navs from "../1-nav/nav";
import Pages from "./pages";
import Co from "./co/co.jsx";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const Fac = () =>{
    return(
        <Fragment>
            <Navs/>
            <div className="main">
                <div className="row">
                        <div className="col-6 g-2">
                    <Link to="co">
                            <button  className="button">
                                <span className="button__icon-wrapper">
                                <svg width={10} className="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
                                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
                                </svg>
                                <svg className="button__icon-svg  button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width={10} fill="none" viewBox="0 0 14 15">
                                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
                                </svg>
                                </span>
                                computer organization
                            </button>
                    </Link>
                        </div>
                    
                        <div className="col-6 g-2">
                    <Link to="oop">
                            <button  className="button">
                                <span className="button__icon-wrapper">
                                <svg width={10} className="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
                                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
                                </svg>
                                <svg className="button__icon-svg  button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width={10} fill="none" viewBox="0 0 14 15">
                                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
                                </svg>
                                </span>
                                object orianted programming
                            </button>
                    </Link>
                        </div>
                        <div className="col-6 g-2">
                    <Link to="or">
                            <button  className="button">
                                <span className="button__icon-wrapper">
                                <svg width={10} className="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
                                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
                                </svg>
                                <svg className="button__icon-svg  button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width={10} fill="none" viewBox="0 0 14 15">
                                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
                                </svg>
                                </span>
                                operation research
                            </button>
                    </Link>
                        </div>
                    
                    
                </div>
            </div>
        </Fragment>
    );
}
export default Fac;