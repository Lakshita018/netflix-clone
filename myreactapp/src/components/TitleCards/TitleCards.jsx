import React , { useEffect,useRef,useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'


const TitleCards = ({title,category}) => {

  const[apiData,setApiData]= useState([]);
  const cardsRef = useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMGJlODY2ZGJhNDZiZjFlNjgxNzQ3Y2M5YzVkOTAwOSIsInN1YiI6IjY2NjJlYTMxNzU1YzFjMTNhZGYwZTllNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zIyRAezLv6lJ2H_bxs3Vb-3oSO17MhmVxTpYTQPWIQo'
    }
  };
  
  const handleWheel=(event)=>{
   event.preventDefault();
   cardsRef.current.scrollLeft += event.deltaV;
  }
  useEffect(()=>{
    
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results))
  .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel',handleWheel);
  },[])
 
  return (
    <div className ='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index)=>{
          return <div className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p> {card.original_title}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards