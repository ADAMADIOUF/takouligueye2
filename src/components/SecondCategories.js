import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import { formatPrice } from '../utils/helpers'
import { useProductsContext } from '../context/products_context'
import img1 from '../assets/big.jpeg'
const SecondCategories = () => {
 const {
   featured_two_products: featured,
   products_loading: loading,
   products_error: error,
 } = useProductsContext()
 if (loading) {
   return <Loading />
 }
 if (error) {
   return <Error />
 }
  return (
    <Wrapper>
      <div className='second-categories'>
        <div className='second-categories-details'>
          <h3>nos produits populaires</h3>
          <div id='rssBlock'>
            <p className='cnnContents'>
              <span className='marqueeStyle'>&nbsp;des savons de qualité </span>

              <span className='marqueeStyle2'>
                &nbsp; des huiles de qualité chez takouligueye
                senegal,Dakar&nbsp;
              </span>
            </p>
          </div>
          <div className='containerSecondCategories-products section-center'>
            <article className='first-products'>
              {featured.slice(0, 1).map((product) => {
                const { img, name, price, desc, id } = product
                return (
                  <div key={id} className='container'>
                    <Link to={`/products/${id}`} className='link'>
                      <img src={img} alt='' className='second-categories-img' />
                    </Link>

                    <footer>
                      <h5 className='name'>{name}</h5>
                      <div className='price-details'>
                        <h5 className='price'>{formatPrice(price)}</h5>
                      </div>
                      <p className='desc'>{desc.substring(0, 200)}</p>
                      <Link to={`/products/${id}`}>
                        <button type='button' className='btn btn-second'>
                          allons-y ¡
                        </button>
                      </Link>
                    </footer>
                  </div>
                )
              })}
            </article>
            <article className='second-products'>
              <img src={img1} alt='' className='big-img' />
            </article>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.article`
  .second-categories {
    background: var(--clr-primary-4);
    height: 100vh;
  }
  .big-img {
    width: 100%;
  }
  .second-categories-details h3 {
    text-align: center;
    color: #fff;
    font-size: 2rem;
    padding: 2rem;
  }
  .second-categories-img{
    width:200px;
  } #rssBlock {
    left: 0px;
    height: 80px;
    color: #ffffff;
    position: absolute;
    width: 100%;
    overflow: hidden;
    margin-top: 15rem;
    z-index: 5;
  }

  /*remove p*/
  .cnnContents {
    width: 100%;
    margin: 0 auto;
    font-size: 30px;
    white-space: nowrap;
    text-transform: uppercase;
    font-family: 'Museo';
    font-weight: bold;
  }

  .marqueeStyle {
    display: inline-block;
    /* Apply animation to this element */
    -webkit-animation: scrolling-left1 20s linear infinite;
    animation: scrolling-left1 20s linear infinite;
    font-size: 5rem;
  }

  .marqueeStyle2 {
    display: inline-block;
    /* Apply animation to this element */
    -webkit-animation: scrolling-left2 20s linear infinite;
    animation: scrolling-left2 20s linear infinite;
    animation-delay: 15s;
    font-size: 5rem;
  }
  /* scrolling-left is continuous/repeatly text */
  @keyframes scrolling-left1 {
    0% {
      transform: translateX(100%);
      -webkit-transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
      -webkit-transform: translateX(-100%);
    }
  }
  @keyframes scrolling-left2 {
    0% {
      transform: translateX(0%);
      -webkit-transform: translateX(0%);
    }
    100% {
      transform: translateX(-200%);
      -webkit-transform: translateX(-200%);
    }
  }

  @-webkit-keyframes scrolling-left1 {
    0% {
      -webkit-transform: translateX(100%);
    }
    100% {
      -webkit-transform: translateX(-100%);
    }
  }
  @-webkit-keyframes scrolling-left2 {
    0% {
      -webkit-transform: translateX(0%);
    }
    100% {
      -webkit-transform: translateX(-200%);
    }
  }
  .containerSecondCategories-products {
    z-index: 10;
  }

  .second-products img {
  }
  @media (min-width: 992px) {
    .containerSecondCategories-products {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 5rem;
    }
  }
  footer {
    color: #fff;
    text-align: center;
  }
  .btn-second {
    background: #fff;
    color: var(--clr-primary-4);
  }
  .btn-second:hover {
    background: var(--clr-primary-9);
    color: #fff;
  }
`
export default SecondCategories