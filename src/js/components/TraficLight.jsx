import React from "react";

import { useState } from "react";

export default function TrafficLight() {
    const [color, setColor] = useState("red");
    const [hasPurple, setHasPurple] = useState(false);

    function changeColor() {
        const colors = hasPurple ? ["red", "yellow", "green", "purple"] : ["red", "yellow", "green"];

        const currentIndex = colors.indexOf(color);
        const nextColor = colors[(currentIndex + 1) % colors.length];
        setColor(nextColor);
    }

    return (
        <div className="d-flex flex-column align-items-center mt-5">
            <div className="d-flex gap-3 mb-5">
                <button className="btn btn-primary" onClick={changeColor}>
                    🔁 Cambiar color
                </button>

                <button className="btn btn-secondary" onClick={() => setHasPurple(!hasPurple)} >
                    {hasPurple ? "Quitar púrpura" : "💜 Añadir púrpura"}
                </button>
            </div>
            
            <div className="traffic-light d-flex flex-column align-items-center">
                <div
                    className={`light red ${color === "red" ? "active" : ""}`}
                    onClick={() => setColor("red")}
                ></div>
                <div
                    className={`light yellow ${color === "yellow" ? "active" : ""}`}
                    onClick={() => setColor("yellow")}
                ></div>
                <div
                    className={`light green ${color === "green" ? "active" : ""}`}
                    onClick={() => setColor("green")}
                ></div>

                {hasPurple && (
                    <div
                        className={`light purple ${color === "purple" ? "active" : ""}`}
                        onClick={() => setColor("purple")}
                    ></div>
                )}
            </div>
        </div>
    );
};
