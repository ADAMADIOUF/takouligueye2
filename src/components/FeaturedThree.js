import React from 'react'
import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import ProductThree from './ProductThree'
const FeaturedThree = () => {
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
    <Wrapper className='section featured-three'>
      <div className='title'>
        <h2>coffrets savons jusqu'a - 30%</h2>
      </div>
      <div className='section-center featured'>
        {featured.map((product) => {
          return <ProductThree key={product.id} {...product} />
        })}
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  background: #fff;
  .featured {
    margin: 20rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .featured-three {
    margin-top: 20rem;
  }
  .btn-products {
    display: flex;
    justify-content: center;
    align-item: center;
    margin: 0 auto;
    text-align: center;
    font-size: 1rem;
    color: #fff;
    background: #000;
    text-transform: uppercase;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 992px) {
    .featured {
      margin: 10rem auto;
    }
  }
`
export default FeaturedThree