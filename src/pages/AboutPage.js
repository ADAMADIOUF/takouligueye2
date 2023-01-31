import React from 'react'
import styled from 'styled-components'
import PageHero from '../components/PageHero'
import aboutImg from '../assets/about.png'

const AboutPage = () => {
  return (
    <main>
      <PageHero title='á Propos' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='takouligueye' />
        <article>
          <div className='title'>
            <h2>notre histoire </h2>
            <div className='underline'></div>
          </div>
          <p>
            Pourquoi faire du savon saponifié à froid maison au lieu de
            l’acheter en supermarché ou pharmacie ? La fabrication de savon fait
            maison vous offre une liberté dans le choix de vos huiles, de vos
            matières grasses, de vos colorants et de vos fragrances. Le savon à
            froid offre une douceur exceptionnelle et les résultats sont
            incomparables avec les autres types de savon. Vous avez la certitude
            de fabriquer du savon qui correspond à vos attentes.
          </p>
          <p>
            Lorsque vous fabriquez une recette de savon à froid, vous
            sélectionnez les ingrédients qui sont importants pour vous et qui
            vous conviennent. Dès que vous savez comment faire du savon facile
            en saponification à froid, vous pouvez ajouter de nombreux
            ingrédients différents pour personnaliser votre pain de savon. Où
            trouver les huiles pour savon avec un bon rapport qualité/prix
          </p>
          <p>
            Faire son savon maison présente de nombreux avantages notamment la
            possibilité de sélectionner des ingrédients de qualité afin de
            fabriquer des savons maison, sains, respectueux de l’environnement
            et de votre peau. Chaque recette de savon maison est unique. Vous
            êtes libre de choisir les ajouts et les parfums que vous souhaitez
            intégrer à votre recette savon maison. Avec une recette de savon
            maison, les matières premières sont celles qui vous correspondent.
            Vous pouvez faire du savon fait maison pour vous et l’offrir en
            cadeau à votre famille ou vos amis. Si vous connaissez des personnes
            qui ont la peau sensible, vous pouvez composer un savon uniquement
            pour eux. Si vous voulez un produit de beauté sans graisses
            animales, vous pouvez concevoir un savon uniquement à base de
            graisses végétales.
          </p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
