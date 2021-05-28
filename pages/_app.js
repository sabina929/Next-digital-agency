import Layout from '../components/Layout'
import '../styles/globals.css'
import { WorkContextProvider } from '../components/WorkContext'

function MyApp({ Component, pageProps }) {
  
  return (
    <WorkContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </WorkContextProvider>
  )
}

export default MyApp