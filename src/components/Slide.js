import React, { useState, useEffect } from 'react'
import data from './../dataSlider'

import styled from 'styled-components'
import { FaRegDotCircle } from 'react-icons/fa'

const Slide = () => {

  const [people, setPeople] = useState(data)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const lastIndex = people.length - 1
    if (activeIndex < 0) {
      setActiveIndex(lastIndex)
    }
    if (activeIndex > lastIndex) {
      setActiveIndex(0)
    }
  }, [activeIndex, people])

  useEffect(() => {
    let slider = setInterval(() => {
      setActiveIndex(activeIndex + 1)
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  }, [activeIndex])
  return (
    <Div>
      <div className='carousel'>
        <div
          className='inner'
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
        >
          {people.map((item) => {
            return (
              <div
                key={item.id}
                className='carousel-item'
                style={{ width: '100%' }}
              >
                <img className='carousel-img' src={item.image} />
                <div className='carousel-item-text'>
                  <h3>{item.title}</h3>
                  <p> {item.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className='carousel-buttons'>
          
          <div className='indicators'>
            {people.map((item, index) => {
              return (
                <button
                  key={item.id}
                  className='indicator-buttons'
                  onClick={() => {
                    setActiveIndex(index)
                  }}
                >
                  <span
                    className={`material-symbols-outlined ${
                      index === activeIndex
                        ? 'indicator-symbol-active'
                        : 'indicator-symbol'
                    }`}
                  >
                    <FaRegDotCircle />
                  </span>
                </button>
              )
            })}
          </div>
          
        </div>
      </div>
    </Div>
  )
}
const Div = styled.section`
  .carousel {
    overflow: hidden;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .inner {
    white-space: nowrap;
    transition: transform 0.3s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }

  .carousel-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 490px;
    background-color: #fff;
    margin-top: 0;
  }

  .carousel-item-text {
    display: none;
  }
  @media (min-width: 992px) {
    .carousel-item-text {
      display: block;
      font-size: 1rem;
      margin: 40px 0 40px 0;
      padding: 0 20px 0 20px;
      white-space: normal;
      color: #617d98;
    }
    .carousel-item-text h3{
      color:var(--clr-primary-9);
    }
  }
  .carousel-img {
    width: 300px;
    padding: 0 20px 0 20px;
  }
  @media (min-width: 768px) {
    .carousel-img {
      width: 400px;
    }
  }
  @media (min-width: 992px) {
    .carousel-img {
      width: 100%;
      height: 600px;
    }
    .carousel {
      margin-top: 2rem;
    }
  }

  .carousel-buttons {
    display: flex;
    justify-content: space-evenly;
  }

  

  .indicators {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
  }

  .indicator-buttons {
    border: none;
    cursor: pointer;
  }

  .indicators > button {
    margin: 5px;
    background: none;
  }

  .indicator-symbol {
    color: #26343f;
  }

  .indicator-symbol-active {
    color: var(--clr-primary-9);
  }
`

export default Slide
