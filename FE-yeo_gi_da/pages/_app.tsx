import type { AppProps } from 'next/app'
import { Layout } from '../components/layout/Layout'
import GlobalStyle from '../styles/Global.style'
import { Header } from '../components/layout/Header'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <GlobalStyle/>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </QueryClientProvider>
  )
}