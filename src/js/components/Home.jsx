import React from "react";

import SecondsCounter from "./SecondsCounter"


window.onload = function () {
    setInterval(() => SecondsCounter(100), 1000);
};

//create your first component
const Home = () => {
	return (
            <SecondsCounter />
	);
};

export default Home;