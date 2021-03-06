import dynamic from 'next/dynamic'
import { ThemeProvider } from 'styled-components'
import { light } from '../theme'
import { GlobalStyle, ResetCss } from '../styles'

// TODO: Remove dynamic import when web3-react supports ssr.
const LotteryProvider = dynamic(
  () => {
    return import('../store/Lottery').then((module) => {
      return module.LotteryProvider
    })
  },
  { ssr: false },
)

// TODO: Remove dynamic import when web3-react supports ssr.
const ToastsContainer = dynamic(
  () => {
    return import('../components/Toast').then((module) => {
      return module.ToastContainer
    })
  },
  { ssr: false },
)

// TODO: Remove dynamic import when web3-react supports ssr.
const ToastsProvider = dynamic(
  () => {
    return import('../store/Toasts').then((module) => {
      return module.ToastsProvider
    })
  },
  { ssr: false },
)

const MyApp = ({ Component, pageProps }) => {
  return (
    <LotteryProvider>
      <ThemeProvider theme={light}>
        <ToastsProvider>
          <ResetCss />
          <GlobalStyle />
          <ToastsContainer />
          <Component {...pageProps} />
        </ToastsProvider>
      </ThemeProvider>
    </LotteryProvider>
  )
}

export default MyApp
