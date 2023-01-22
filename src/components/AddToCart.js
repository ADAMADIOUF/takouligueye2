
import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { useCartContext } from '../context/cart_context'
import AmountButtons from './AmountButtons'
const AddToCart = ({product}) => {
  const{addToCart}=useCartContext()
  const{id}= product
  const[amount,setAmount]= useState(1)
  const increase =() =>{
setAmount((oldAmount)=>{
  let tempAmount = oldAmount + 1
  if (tempAmount < 1) {
    tempAmount = 1
  }
  return tempAmount
})
  }
  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1
      if(tempAmount < 1){
        tempAmount = 1
      }
      return tempAmount
    })
  }
  return (
    <Wrapper>
      <div className='btn-container'>
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <Link
          to={`/cart`}
          onClick={() => addToCart(id, amount, product)}
        >
          <button type='button' className='add'>
            ajouter au panier
          </button>
        </Link>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .add {
    margin-top: 1rem;
    color: white;
    font-size: 1rem;
    background: #4d7c0f;
    padding: 0.375rem 0.75rem;
    letter-spacing: var(--spacing);
    display: inline-block;
    font-weight: 400;
    transition: var(--transition);
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: var(--radius);
    border-color: transparent;
  }
`
export default AddToCart
