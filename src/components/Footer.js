// import React from 'react'
// import { Link } from 'react-router-dom'
// import styled from 'styled-components'
// import logo from '../assets/logotakouligueye.png'
// import { FaFacebookSquare, FaInstagramSquare, FaTiktok } from 'react-icons/fa'
// const Footer = () => {
//   return (
//     <Wrapper>
//       <div className='footer'>
//         <div className='container-footer'>
//           <article className='footer-logo'>
//             <img src={logo} alt='' />
//             <h6>tel:701 500 32 59</h6>
//             <h3>faq</h3>
//             <h3>contact</h3>
//             <h3>plan du site</h3>
//             <h3>takouligueye</h3>
//             <p>senegal,dakar</p>
//           </article>
       
//           <article className='footer-menu'>
//             <h3 className='footer-menu-title bg1'>menu</h3>
//             <h3>huile d'olive</h3>
//             <h3>savons</h3>
//             <h3>huile de neem</h3>
//             <h3>huile de palme</h3>
//             <h3>huile de Mbeurbeuf</h3>
//           </article>
//           <article className='footer-services'>
//             <h3 className='footer-services-title bg1'>services</h3>
//             <h3>EMBALLAGE ET MESSAGE CADEAU</h3>
//             <h3>CONSEIL ET ASSISTANCE</h3>
//             <h3>LIVRAISON</h3>
//             <h3>LIVRAISON CADEAU EXPRESS</h3>
//           </article>
//           <article className='footer-newsletter'>
//             <hr />
//             <h3 className='footer-newsletter-title bg1'>newsletter</h3>
//             <p>
//               Vous pouvez vous désinscrire à tout moment. Vous trouverez pour
//               cela nos informations de contact dans les conditions d'utilisation
//               du site.
//             </p>
//             <form className='form-footer'>
//               <input
//                 type='email'
//                 placeholder='votre email'
//                 className='input-footer'
//               />
//               <button className='btn-footer'>s'inscrire</button>
//             </form>
            
//             <div className='follow-us '>
//              <h3 className='bg1'>suivez-nous</h3>
//               <div className='follow-us-icons'>
//                 <FaFacebookSquare />
//                 <FaInstagramSquare />
//                 <FaTiktok />
//               </div>
//             </div>
//           </article>
//         </div>
//       </div>
//     </Wrapper>
//   )
// }
// const Wrapper = styled.section`
//   height: 5rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
  
//   .footer-logo img {
//     height: 100px;
//     width: 100px;

//     object-fit: cover;
//   }
//   article h3 {
//     font-size: 1rem;
//     text-transform: uppercase;
//     margin: 1rem;
//     font-weight: 300;
//   }
//   .bg1 {
//     color: var(--clr-primary-7);
//     border-top: 1px solid var(--clr-primary-7);
//     width: 15rem;
//     padding: 1rem;
//   }
//   .footer-menu-title {
//     margin: 1rem;
//   }
//   .follow-us-icons {
//     font-size: 2rem;
//     color: var(--clr-primary-8);
//     display: flex;
//     gap: 4rem;
//   }
//   .container-footer {
//     margin-top: 5rem;
//   }
//   @media (min-width: 768px) {
//     .container-footer {
//       display: grid;
//       grid-template-columns: repeat(2, 1fr);
//       gap: 5rem;
//     }
//     .follow-us-icons {
//       display: grid;
//       grid-template-columns: repeat(2, 1fr);
//       gap: 5rem;
//     }
//   }
//   @media (min-width: 992px) {
//     .container-footer {
//       grid-template-columns: repeat(4, 1fr);
//     }
//     .follow-us-icons {
//       display: grid;
//       grid-template-columns: repeat(3, 1fr);
//       gap: 5rem;
//     }
//   }
//   .form-footer {
//     width: 100%;
//     border: 1px solid var(--clr-black);
//     display: flex;
//     justify-content: space-between;
//   }
//   .input-footer {
//     width: 100%;
//     padding: 0.75rem;
//   }
//   .input-footer::placeholder {
//     color: var(--clr-primary-5);
//     letter-spacing: var(--spacing);
//   }
//   .btn-footer {
//     background: var(--clr-primary-8);
//     color: var(--clr-white);
//     letter-spacing: var(--spacing);
//     text-transform: uppercase;
//     font-size: 1rem;
//     outline: none;
//     border: none;
//   }
// `
// export default Footer
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Footer = () => {
  return (
    <Wrapper>
      <h5>
        &copy;
        {new Date().getFullYear()}
        <span className='link-footer'>takou ligueye</span>
      </h5>
      <h5>Tous les droits sont réservés</h5>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;

  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
  .link-footer {
    color: #84cc16;
  }
`

export default Footer
