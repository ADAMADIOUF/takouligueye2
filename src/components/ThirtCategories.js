import React from 'react'
import styled from 'styled-components'
import img1 from "../assets/thirt1.jpeg"
import img2 from '../assets/thirt2.jpeg'
import img3 from '../assets/thirt3.jpeg'
import img4 from '../assets/thirt5.jpeg'
const ThirtCategories = () => {
  return (
    <Wrapper>
      <section className='categories-third'>
        <div className='categories-thirt-details'>
          <h3>
            la qualité de service: <span> notre priorité</span>
          </h3>
          <p>
            nous proposons à nos clients des emballages cadeaux traditionnels &
            des échantillions gratuits à chaque commande.
          </p>
        </div>
        <div className='container-thirt-categories section-center'>
          <article className='first bg'>
            <div className='first-img'>
              <img src={img1} alt='' />
              <h3>ÉCHANTILLONS « SUR MESURE »</h3>
              <p>
                Envie de découvrir un nouveau savon ? Recevez 1 échantillon «
                 » chez vous, pour avoir le temps de les découvrir et
                de les laisser évoluer sur peau.
              </p>
            </div>
          </article>
          <article className='second bg'>
            <div className='second-img'>
              <h3> PAQUETS CADEAUX »</h3>
              <p>
                Le savon, tout un art... d'offrir ! Sublimez votre cadeau par un
                emballage haut de gamme, réalisé dans les règles de l'art par
                nos conseillères aux doigts de fees
              </p>
              <img src={img2} alt='' />
            </div>
          </article>
          <article className='third bg'>
            <div className='third-img'>
              <img src={img3} alt='' />
              <h3> VOTRE CONFIANCE RÉCOMPENSÉE</h3>
              <p>
                Aux petits soins pour nos clients, on adore vous chouchouter !
                Un cadeau dès 30.000 FCFA d’achat • Des surprises dans chaque
                colis dès la deuxième commande. Laissez-vous surprendre !
              </p>
            </div>
          </article>
          <article className='four bg'>
            <div className='four-img'>
              <h3>LIVRAISON EXPRESS ET SOIGNÉE</h3>
              <p>
                On donne tout pour expédier vos commandes le plus vite possible
                : 98% de nos commandes partent le jour même pour un achat avant
                12h.
              </p>
              <img src={img4} alt='' />
            </div>
          </article>
        </div>
      </section>
    </Wrapper>
  )
}
const Wrapper = styled.section`
.container-thirt-categories img{
 width:100%;
 height:400px;
}
.categories-third{
 background:var(--clr-primary-10)
}
.categories-thirt-details{
 text-align:center;
 padding:2rem
}
  .bg {
    background: #fff;
    box-shadow:--light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    padding:1rem;
    margin:1rem;
  }
  @media (min-width:992px) {
  .container-thirt-categories{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 5rem;
  }
}
`
export default ThirtCategories