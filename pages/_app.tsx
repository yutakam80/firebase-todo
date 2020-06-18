import { AppProps } from 'next/app'
import { wrapper } from 'store'
import 'services/firebase'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default wrapper.withRedux(App)