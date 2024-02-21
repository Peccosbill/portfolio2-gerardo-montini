import React from "react";
import desarrollo from "../img/desarrollo.png"
import java from "../img/java.png"
import react2 from "../img/react.jpg"
import carrera from "../img/carrera.jpg"
import flex from "../img/flex.jpg"

const Certificados = () => {
    return (
        <div className="container mt-44 mx-auto px-4 lg:px-8 md:px-14 w-full">
            <h2 id="tech" className="secondary-title">
                Certificados
            </h2>
            <p className="section-paragraph">
                Estos son los Certificados que he ido obteniendo con mis
                estudios
            </p>
            <div class="flex flex-wrap  ">
                <img src={desarrollo} alt="" style={{ width: "450px", margin: "10px" }} className=" w-full md:w-1/5 m-2 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..." />
                <img src={java} alt="" style={{ width: "450px", margin: "10px" }} className=" w-full md:w-1/5 m-2 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..." />
                <img src={react2} alt="" style={{ width: "450px", margin: "10px" }} className=" w-full md:w-1/5 m-2 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..." />
                <img src={carrera} alt="" style={{ width: "450px", margin: "10px" }} className=" w-full md:w-1/5 m-2 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..." />
                <img src={flex} alt="" style={{ width: "450px", margin: "10px" }} className=" w-full md:w-1/5 m-2 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..." />
            </div>
        </div>
    );
};

export default Certificados;
