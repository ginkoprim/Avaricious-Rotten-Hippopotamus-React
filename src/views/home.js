import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Avaricious Rotten Hippopotamus</title>
        <meta property="og:title" content="Avaricious Rotten Hippopotamus" />
      </Helmet>
      <div className="home-container1"></div>
    </div>
  )
}

export default Home
