import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";



function SecondsCounter(seconds) {
    let numerito = Math.floor(Math.random() * 100);


    return (
        <div className="container-fluid bg-dark d-flex justify-content-center">
                <div className="numberCard border rounded">
                    <h1 className="number"><FontAwesomeIcon icon={faClock} /></h1>
                </div>
                <div className="numberCard border rounded">
                    <h1 className="number">{numerito}</h1>
                </div>
                <div className="numberCard border rounded">
                    <h1 className="number">0</h1>
                </div>
                <div className="numberCard border rounded">
                    <h1 className="number">0</h1>
                </div>
                <div className="numberCard border rounded">
                    <h1 className="number">0</h1>
                </div>
                <div className="numberCard border rounded">
                    <h1 className="number">0</h1>
                </div>
                <div className="numberCard border rounded">
                    <h1 className="number">0</h1>
                </div>
        </div>
    );
}

export default SecondsCounter;