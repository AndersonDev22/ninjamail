import React from 'react'
import Head from 'next/head'
import MainLayout from '../src/components/Layout'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <MainLayout/>
    </>
  )
}
export default Home
