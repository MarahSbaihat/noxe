import React from 'react';
import style from './Details.module.css';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Details() {

    let [searchParams,setSearchParams] = useSearchParams();
    let [details,setDetails] = useState([]);
    let currentID = searchParams.get('id');

    async function getDetails (){
        let {data} = await axios.get(`https://api.themoviedb.org/3/movie/${currentID}?api_key=056d74a7dafb8f2b3a49b8b06219b1bf`);
        setDetails(data);
    }

    useEffect(()=>{
        getDetails();
    },[])

    let prefix = 'https://image.tmdb.org/t/p/w500';

  return (
    <>
        <div className="row py-5 d-flex align-items-center vh-100" id='movie'>
            <div className="col-md-4 py-2 text-center">
                <img className={`${style.img}`} src={prefix+details.poster_path} alt="movie Poster" />
            </div>
            <div className="col-md-7 offset-1 py-2 ">
                <h2 className={`${style.h2} pb-1`}>{details.title}</h2>
                <h2 className={`${style.p1} pb-2`}>original_language : {details.original_language}</h2>
                {/* <h6 className={`${style.h6} pb-3`}>Production companies : {details.production_companies[0].name}</h6> */}
                <p className={`${style.p1} pb-2`}>vote average : {details.vote_average}</p>
                <p className={`${style.p1} pb-3`}>vote_count : {details.vote_count}</p>
                <p className={`${style.p}`}>{details.overview}</p>
            </div>
        </div>
    </>
  )
}

export default Details