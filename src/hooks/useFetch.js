import React, { useEffect, useState } from 'react'

export default function useFetch(url) {
    const [loading, setLoading] = useState(true);
    const [data,setData] = useState(null);
    const [error, setError] = useState(false);
    const getData = async () => {
        setLoading(true);
        const response = await fetch(url);
        const responseJson = await response.json();
        setData(responseJson);
        setLoading(false);
    }
    useEffect(()=>{

        

        try{
            getData();

        }catch(e){
            setError(true)
        }

    },[url])


    return { data, loading, error }
}
