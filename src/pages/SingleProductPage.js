
import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'
import { Loading, Error, ProductImages, AddToCart,Stars } from '../components'

import styled from 'styled-components'
import { Link } from 'react-router-dom'
const SingleProductPage = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext()
  useEffect(() =>{
    fetchSingleProduct(`${url}${id}`)
    console.log(product);
  },[id])
  useEffect(()=>{
    if(error){
      setTimeout(() =>{
navigate("/")
      },3000)
    }
  })
  if(loading){
    return<Loading/>
  }
  if (error) {
    return <Error />
  }
  const { name, price, oldPrice, desc, descTwo, img, stars, reviews } = product
  return (
    <Wrapper>
      <div className='section section-center'>
        <Link to={`/`} className='btn-link'>
          back to products
        </Link>
        <div className='product-center'>
          <ProductImages img={img} />
          <section className='content'>
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <div className='price-details'>
              <h5 className='price'>{formatPrice(price)}</h5>
              <h5 className='old-price'>{formatPrice(oldPrice)}</h5>
            </div>
            <p className='desc'>{desc}</p>
            <p className='desc'>{descTwo}</p>
            <hr />
          </section>
          <AddToCart product={product} />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .btn {
    color: #fff;
  }
  .price-details {
    display: flex;
    gap: 5rem;
  }
  .old-price {
    text-decoration: line-through;
  }
  .price {
    color: var(--clr-primary-9);
  }

  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`
export default SingleProductPage
