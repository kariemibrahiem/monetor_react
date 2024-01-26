import { Fragment } from "react";
import Vid from "../vid";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route } from "react-router-dom";
import Navs from "../../1-nav/nav";
const Co = () =>{
    return(
        <Fragment>
            <Navs/>
            <div className="main">
                <div className="row">
                    <div className="col-6 ">
                        <Link to="/fac/co/v1">
                                <button  className="button">
                                    <span className="button__icon-wrapper">
                                    <svg width={10} className="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
                                        <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
                                    </svg>
                                    <svg className="button__icon-svg  button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width={10} fill="none" viewBox="0 0 14 15">
                                        <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
                                    </svg>
                                    </span>
                                    first lecture
                                </button>
                        </Link>
                    </div>
                    <div className="col-6 ">
                        <Link to="/fac/co/v2">
                                <button  className="button">
                                    <span className="button__icon-wrapper">
                                    <svg width={10} className="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
                                        <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
                                    </svg>
                                    <svg className="button__icon-svg  button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width={10} fill="none" viewBox="0 0 14 15">
                                        <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
                                    </svg>
                                    </span>
                                    second lecture
                                </button>
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default Co;