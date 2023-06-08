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
        let {data} = await axios.get(`https://api.themoviedb.org/3/person/${currentID}?api_key=056d74a7dafb8f2b3a49b8b06219b1bf`);
        setDetails(data);
    }

    useEffect(()=>{
        getDetails();
    },[])

    let prefix = 'https://image.tmdb.org/t/p/w500';

  return (
    <>
        <div className="row py-5 d-flex" id='movie'>
            <div className="col-md-4 pt-5 text-center">
                <img className={`${style.img}`} src={prefix+details.profile_path} alt="movie Poster" />
            </div>
            <div className="col-md-7 offset-1 py-2 ">
                <h2 className={`${style.h2} pb-1`}>{details.name}</h2>
                <h2 className={`${style.p1} pb-2`}>Birthday : {details.birthday}</h2>
                {/* <h6 className={`${style.h6} pb-3`}>Production companies : {details.production_companies[0].name}</h6> */}
                <p className={`${style.p1} pb-2`}>known for department : {details.known_for_department}</p>
                <p className={`${style.p1} pb-3`}>Popularity : {details.popularity}</p>
                <p className={`${style.p}`}>{details.biography}</p>
            </div>
        </div>
    </>
  )
}

export default Details