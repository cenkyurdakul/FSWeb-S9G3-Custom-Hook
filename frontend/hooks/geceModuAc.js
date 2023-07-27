/* import React, { useState } from "react"; */
import useLocalStorage from "./useLocalStorage";

function geceModuAc(initialMode) {
    const [geceModu, setGeceModu] = useLocalStorage("geceModu",initialMode);

    const toggleMode = () => {
        /* preventDefault(); */
        console.log("geceModuAc.js: toggleMode() çalıştı");
        setGeceModu(!geceModu);
      };
    return [geceModu,toggleMode];
}

export default geceModuAc;