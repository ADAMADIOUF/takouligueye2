import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import { CarTContent } from '../components'


const CartPage = () => {
  const { cart} = useCartContext()
  if(cart.length < 1){
    return<Wrapper className='page-100'>
      <div className="empty">
        <h2>votre panier est vide</h2>

        <Link to={`/`} className="btn">
          remplis-le
        </Link>
      </div>
    </Wrapper>
  }
  return (
    <Wrapper className='page'>
     <CarTContent/>
    </Wrapper>
  )
}
const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
  .btn {
    color: #fff;
  }
`

export default CartPage
