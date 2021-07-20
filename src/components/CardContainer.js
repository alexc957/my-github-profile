import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch';

import Card from './Card';
import Pagination from './Pagination';


const REPOS_URL = "https://api.github.com/users/alexc957/repos?per_page=6";
export default function CardContainer() {

    const [page, setPage] = useState(1)
    const {data,loading, error} = useFetch(`${REPOS_URL}&page=${page}`);


   



    if(loading){
        return <p>loading...</p>
    }

    if(error){
        return <p>error...</p>
    }
    return (
        <>

        
        <div className="container">
          
            { data.map((repo)=><Card key={repo.id} repo={repo}/>)}



        </div>
        <Pagination page={page} setPage={setPage} />
        </>
    )
}
