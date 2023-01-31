import React from 'react'
import styled from 'styled-components'

// extra imports
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import Checkout from '../components/Checkout'

const CheckoutPage = () => {
  const { cart } = useCartContext()
  return (
    <Wrapper>
      <Checkout/>
    </Wrapper>
  )
}
const Wrapper = styled.section`
.empty-btn:{
  background:red;
  color:red
}

`
export default CheckoutPage
