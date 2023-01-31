import React from 'react'
import styled from 'styled-components'
const Map = () => {
  return (
    <Wrapper>
      <section className='map-home '>
        <div className='map-container'>
          <article className='maps'>
            <iframe
              src='https://maps.google.com/maps?q=north%20dakota%20%20%20minot&t=&z=15&ie=UTF8&iwloc=&output=embed'
              frameborder='0'
              scrolling='no'
              marginheight='0'
              marginwidth='0'
            ></iframe>
          </article>
        </div>
      </section>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .map-home {
    margin-top: 5rem;
    position: relative;
  }
  iframe {
    width: 100%;
    height: 400px;
    position: relative;
  }
  .maps {
    border: 1px solid var(--clr-white);
    box-shadow: var(--light-shadow);
    padding: 1rem;
  }
`
export default Map
