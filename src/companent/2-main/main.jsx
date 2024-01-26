import { Fragment } from "react";
import "./main.css";
import std from "../../materiel/programmer.png"
import { Link } from "react-router-dom";
const Main = () =>{
    return(
        <Fragment>
            <center>
            <div className="main">
            <p className="create"><sub>created by</sub> ENG/KARIEM IBRAHIEM </p>
                {/* <button>BASIC COURSES
                    <div className="star-1">
                    <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd'}} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><defs /><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer" /><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0" /></g></svg>
                    </div>
                    <div className="star-2">
                    <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd'}} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><defs /><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer" /><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0" /></g></svg>
                    </div>
                    <div className="star-3">
                    <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd'}} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><defs /><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer" /><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0" /></g></svg>
                    </div>
                    <div className="star-4">
                    <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd'}} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><defs /><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer" /><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0" /></g></svg>
                    </div>
                    <div className="star-5">
                    <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd'}} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><defs /><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer" /><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0" /></g></svg>
                    </div>
                </button> */}

                {/* the second btn */}
                <Link to="/fac">
                <button  className="button">
                    <span className="button__icon-wrapper">
                    <svg width={10} className="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
                        <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
                    </svg>
                    <svg className="button__icon-svg  button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width={10} fill="none" viewBox="0 0 14 15">
                        <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
                    </svg>
                    </span>
                    faculty courses
                </button>
                </Link>
                    <img className="std" src={std}/>

            </div>
            </center>
        </Fragment>
    );
};
export default Main;