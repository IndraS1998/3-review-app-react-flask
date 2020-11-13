import React, { useState } from 'react';
import people from './data';
import {FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  /* 
      ==============
        variables
      ==============
  */
  const [index,setIndex] = useState(0)
  const {name,job,image,text} = people[index]

  /*
      ===============
        functions
      ===============
  */ 

  //moving right
  const onMoveRight = () =>{
    let newIndex = index + 1
    let arrLength = people.length - 1
    if(newIndex > arrLength){
      setIndex(0)
    }else{
      setIndex(newIndex)
    }
  }

  //generating random index
  const onGenerateRandom = () =>{
    setIndex(Math.floor(Math.random() * Math.floor(people.length)))
  }

  //moving left
  const onMoveLeft = () =>{
    if(index === 0){
      setIndex(index => people.length - 1)
    }else{
      setIndex(index => index - 1)
    }
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt="image" className="person-img"/>
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <div className="author">{name}</div>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className='prev-btn' onClick={onMoveLeft}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={onMoveRight}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={onGenerateRandom}>
        suprise me
      </button>
    </article>
  )
};

export default Review;
