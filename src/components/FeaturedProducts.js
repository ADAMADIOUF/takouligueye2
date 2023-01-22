import React,{useState} from 'react'
import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'
import Filters from './Filters'

const FeaturedProducts = () => {
  const{featured_products:featured,products_loading:loading,products_error:error,products}= useProductsContext()
  const[search,setSearch]= useState([])
  if(loading){
    return<Loading/>
  }
  if (error) {
    return <Error />
  }
  return (
    <Wrapper className='section'>
      <div className='title'>
        <h2>des solides irrésistibles</h2>
      </div>
      <Filters setSearch={setSearch}  products={products} />
      <div className='section-center featured'>
        {featured.map((product) => {
          return <Product key={product.id} {...product} search={search} />
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: #fff;
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn-products {
display:flex;
justify-content:center;
align-item:center;
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
`



export default FeaturedProducts
