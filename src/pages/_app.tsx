import '../styles/globals.css'
import 'nprogress/nprogress.css'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import {CacheProvider, EmotionCache} from '@emotion/react'
import createEmotionCache from 'src/helpers/create-emotion-cache'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import theme from 'src/helpers/theme'
import { CssBaseline } from '@mui/material'
import NProgress from 'nprogress'
import { useEffect } from 'react'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const clientSideEmotionCache = createEmotionCache()

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps, router } = props

  useEffect(() => {
    const handleRouteStart = () => NProgress.start(),
          handleRouteDone = () => NProgress.done()
    router.events.on('routeChangeStart', handleRouteStart)
    router.events.on('routeChangeComplete', handleRouteDone)
    router.events.on('routeChangeError', handleRouteDone)

    return () => {
      router.events.off('routeChangeStart', handleRouteStart)
      router.events.off('routeChangeComplete', handleRouteDone)
      router.events.off('routeChangeError', handleRouteDone)
    }
  }, [])

  return <CacheProvider value={emotionCache}>
    <Head>
      <meta name='viewport' content='initial-scale=1, width=device-width' />
    </Head>
    <ThemeProvider theme={theme}>
      <CssBaseline />  
      <Component {...pageProps} />
    </ThemeProvider>
  </CacheProvider>
}

export default MyApp
