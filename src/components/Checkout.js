import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import PayPal from '../components/Paypal'
import axios from 'axios'
import { useCartContext } from '../context/cart_context'

import { formatPrice } from '../utils/helpers'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
  const [checkout, setCheckout] = useState(false)
  return (
    <Wrapper>
      {checkout ? (
        <PayPal />
      ) : (
        <button onClick={() => setCheckout(true)} className='btn-checkout'>
          payer ici
        </button>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .btn-checkout {
    padding: 0.55rem 0.5rem;
    background: var(--clr-primary-9);
    color: #fff;
    font-size: 1rem;
    border-radius: 0.25rem;
    display: block;
    margin: 5rem auto;
    --transition: all 0.3s linear;
    cursor: pointer;
    border: none;
  }
  .btn-checkout:hover {
    background: #84cc16;
  }
`

export default Checkout
