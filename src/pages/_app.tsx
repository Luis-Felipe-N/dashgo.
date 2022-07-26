import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SidebarDrawerProvider } from '../contexts/SIdebarDrawerContext'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { ChakraProvider} from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { makeServer } from '../services/migrate'


if (process.env.NODE_ENV === 'development') {
  makeServer()
}

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
            <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
    </QueryClientProvider>
  </>)
}

export default MyApp
