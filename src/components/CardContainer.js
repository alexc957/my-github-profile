import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch';
import Card from './Card';


const REPOS_URL = "https://api.github.com/users/alexc957/repos?per_page=9";
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
        <div className="container">
          
            {data.map((repo)=><Card key={repo.id} repo={repo}/>)}


            {page>1 && <button onClick={()=>setPage(page-1)}>previous</button>} {page} <button onClick={()=>setPage(page+1)}>next</button> 
        </div>
    )
}