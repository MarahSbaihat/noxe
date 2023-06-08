import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './Home.module.css';
import { useNavigate } from 'react-router-dom';


function Home() {

  let navigate = useNavigate();
  function goToDetails(id){
    navigate({
      pathname:'/Details',
      search:`?id=${id}`,
    })
  }
  function goToDetailsTV(id){
    navigate({
      pathname:'/DetailsTV',
      search:`?id=${id}`,
    })
  }
  function goToDetailsPerson(id){
    navigate({
      pathname:'/DetailsPerson',
      search:`?id=${id}`,
    })
  }


  let prefix = 'https://image.tmdb.org/t/p/w500';

  let [trendingMovies,setTrendingMovies] = useState([]);
  let [trendingTv,setTrendingTv] = useState([]);
  let [trendingPerson,setTrendingPerson] = useState([]);

  async function getTrendingItem (mediaType,callback){
    let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=056d74a7dafb8f2b3a49b8b06219b1bf`);
    callback(data.results);
  }

  useEffect( () =>{
    getTrendingItem ('movie',setTrendingMovies);
    getTrendingItem ('tv',setTrendingTv);
    getTrendingItem ('person',setTrendingPerson);
  },[])

  return (
    <>
      <div className="row py-5" id='movie'>
        <div className="col-md-4 d-flex align-items-center">
          <div>
            <div className={`${style.brdr} w-50`}></div>
            <h2 className={`${style.h22} pt-4 pb-2`}>Trending Movie</h2>
            <p className={`${style.p} pb-4`}>Here you can see trending movie for the day</p>
            <div className={`${style.brdr} w-100`}></div>
          </div>
        </div>
        {trendingMovies.map((movie,index)=>
          <div onClick={()=>goToDetails(movie.id)} className="col-md-2 py-2 text-center" key={index}>
            {/* <div className={`${style.overflow}`}><i className={`${style.icon} fa-solid fa-magnifying-glass-plus`}></i></div> */}
            <img className={`${style.img}`} src={prefix+movie.poster_path} alt="movie Poster" />
            <h2 className={`${style.h2}`}>{movie.title}</h2>
          </div>
        )}
      </div>
      <div className={`${style.brdr} w-100`}></div>
      <div className="row py-5" id='tv'>
        <div className="col-md-4 d-flex align-items-center">
          <div>
            <div className={`${style.brdr} w-50`}></div>
            <h2 className={`${style.h22} pt-4 pb-2`}>Trending TV Shows</h2>
            <p className={`${style.p} pb-4`}>Here you can see trending TV Shows for the day</p>
            <div className={`${style.brdr} w-100`}></div>
          </div>
        </div>
        {trendingTv.map((movie,index)=>
          <div onClick={()=>goToDetailsTV(movie.id)} className="col-md-2 py-2 text-center" key={index}>
            {/* <div className={`${style.overflow}`}><i className={`${style.icon} fa-solid fa-magnifying-glass-plus`}></i></div> */}
            <img className={`${style.img}`} src={prefix+movie.poster_path} alt="TV Shows Poster" />
            <h2 className={`${style.h2}`}>{movie.name}</h2>
          </div>
        )}
      </div>
      <div className={`${style.brdr} w-100`}></div>
      <div className="row py-5" id='person'>
        <div className="col-md-4 d-flex align-items-center">
          <div>
            <div className={`${style.brdr} w-50`}></div>
            <h2 className={`${style.h22} pt-4 pb-2`}>Trending Person</h2>
            <p className={`${style.p} pb-4`}>Here you can see trending Person for the day</p>
            <div className={`${style.brdr} w-100`}></div>
          </div>
        </div>
        {trendingPerson.map((movie,index)=>
          <div onClick={()=>goToDetailsPerson(movie.id)} className="col-md-2 py-2 text-center" key={index}>
            {/* <div className={`${style.overflow}`}><i className={`${style.icon} fa-solid fa-magnifying-glass-plus`}></i></div> */}
            <img className={`${style.img}`} src={prefix+movie.profile_path} alt="person Photo" />
            <h2 className={`${style.h2}`}>{movie.name}</h2>
          </div>
        )}
      </div>
    </>
  )
}

export default Home