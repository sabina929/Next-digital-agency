import Layout from '../components/Layout'
import '../styles/globals.css'
// import { WorkContextProvider } from '../components/WorkContext'

function MyApp({ Component, pageProps }) {
  
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp