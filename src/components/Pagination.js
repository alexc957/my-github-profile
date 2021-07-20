import React from 'react'
const PREVOIUS_ICON_URL = "https://image.flaticon.com/icons/png/512/892/892513.png";
const NEXT_ICON_URL = "https://image.flaticon.com/icons/png/512/892/892529.png";
export default function Pagination({page, setPage}) {
    return (
        <div className="row-space-between">     
            <button className="pag-link" onClick={()=> setPage(page - 1)}>{page>1 && <img width={12} height={12} src={PREVOIUS_ICON_URL}/>}</button> 
            {page} 
            <button  className="pag-link" onClick={()=>setPage(page + 1)} ><img width={12} height={12} src={NEXT_ICON_URL} /></button>
        </div>
    )
}
