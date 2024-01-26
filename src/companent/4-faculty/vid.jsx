import { Fragment } from "react";
import Navs from "../1-nav/nav";

const Vid = (props) =>{
    return(
        <Fragment>
            <Navs/>
            <div className="main">
            <h3>{props.title}</h3>
            <iframe width="560" height="315" src={props.vid_src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen controls></iframe>
            </div>
        </Fragment>
    );
}
export default Vid;