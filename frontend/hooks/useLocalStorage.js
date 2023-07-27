import React, { useState, useEffect } from "react";

function useLocalStorage(key, initialData ){
    const [data, setData] = useState(initialData);

    useEffect(() => {
        if (window.localStorage.getItem(key) === null) {
            window.localStorage.setItem(key, data );
        } else {
            const lsData = windows.localStorage.getItem(key);
            setData(lsData);
        }
    }, [data]);

    return [data, setData];
}

export default useLocalStorage;