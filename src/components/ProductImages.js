import React, { useState } from 'react'
import styled from 'styled-components'
const ProductImages = ({img =[{url:""}]}) => {
  const[mai,setMain] = useState(img[0])
  return (
    <Wrapper>
      <img src={mai.url} alt="" className='main' />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }

  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
  }
`
export default ProductImages
