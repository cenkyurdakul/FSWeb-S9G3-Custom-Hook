import React, { useState } from "react";

function geceModuAc(initialMode) {
    const [geceModu, setGeceModu] = useState(initialMode);

    const toggleMode = () => {
        /* preventDefault(); */
        console.log("geceModuAc.js: toggleMode() çalıştı");
        setGeceModu(!geceModu);
      };
    return [geceModu,toggleMode];
}

export default geceModuAc;