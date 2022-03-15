import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

import type { AppProps } from 'next/app'
import {useEffect} from "react"
import { initContract } from '../config/nearUtils'
// import 'flowbite';
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initContract()
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
