import React from 'react'

// COMPONENTS
import Gallery from '../../components/Gallery';
import Cart from '../../components/Cart';
import Modal from '../../components/Modal';

// STYLES
import style from './style.module.scss';

// HELMET
import { Helmet } from 'react-helmet';

const Search: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Projeto MTD</title>
        <meta name="description" content="Seja bem-vindo ao projeto MTD para a vaga de Front End Developer (VTEX IO)" />

        <meta property="og:title" content="Projeto MTD" />
        <meta property="og:description" content="Venha analisar meu código." />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="Programação, VTEX, VTEX IO, Vaga, React, ReactJS" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <main className={style.searchPage}>
        <div className={style.galleryAndCart}>
          <Gallery />
          <Cart />
          <Modal />
        </div>
      </main>
    </>

  )
}

export default Search;