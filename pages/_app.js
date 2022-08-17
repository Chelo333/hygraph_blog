import 'tailwindcss/tailwind.css'
import '../styles/global.scss'
import React , { useState , useEffect}from 'react'
import  {Layout} from '../components'



function MyApp({ Component, pageProps }) {
  return (
  <Layout>
  <Component {...pageProps} />

  </Layout>
  )
}

export default MyApp
