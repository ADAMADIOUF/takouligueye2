import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'

import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext()
  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            Total:
            <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            frais d'expédition :<span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h5>
            Total de la commande :{' '}
            <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h5>
        </article>
        <Link to={`/checkout`} className='btn'>
          procéder au paiement
        </Link>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 0.5rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 100px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
    color: #fff;
    gap: 1rem;
    background: var(--clr-primary-9);
  }
`
export default CartTotals