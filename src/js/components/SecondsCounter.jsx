import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";



function SecondsCounter() {
        let seconds = 0;

        setInterval(() => {
            seconds++;

            let secondsSeparated = seconds.toString().padStart(6, "0").split("");

            for (let x = 0; x < 6; x++) {
                let numberDom = document.getElementById(`number${x}`);
                if (numberDom) numberDom.textContent = secondsSeparated[x];
            }
        }, 1000);

    return (
        <div className="container-fluid bg-dark d-flex justify-content-center">
                <div className="numberCard border rounded">
                    <h1 className="number"><FontAwesomeIcon icon={faClock} /></h1>
                </div>
                <div className="numberCard border rounded">
                    <h1 id="number0" className="number">0</h1>
                </div>
                <div className="numberCard border rounded">
                    <h1 id="number1" className="number">0</h1>
                </div>
                <div className="numberCard border rounded">
                    <h1 id="number2" className="number">0</h1>
                </div>
                <div className="numberCard border rounded">
                    <h1 id="number3" className="number">0</h1>
                </div>
                <div className="numberCard border rounded">
                    <h1 id="number4" className="number">0</h1>
                </div>
                <div className="numberCard border rounded">
                    <h1 id="number5" className="number">0</h1>
                </div>
        </div>
    );
}

export default SecondsCounter;