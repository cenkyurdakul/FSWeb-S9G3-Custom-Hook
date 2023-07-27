import React, { useState, useEffect } from "react";

function useLocalStorage(key, initialData ){
    const [data, setData] = useState(initialData);

    useEffect(() => {
        if (localStorage.getItem(key) === null) {
            localStorage.setItem(key, JSON.stringify(data) );
        } else {
            const lsData = JSON.parse(localStorage.getItem(key));
            setData(lsData);
        }
    }, [data]);

    const writeToLocalStorage = newData => {
        localStorage.setItem(key, JSON.stringify(newData));
        setData(newData);
    };

    return [data, writeToLocalStorage];
}

export default useLocalStorage;