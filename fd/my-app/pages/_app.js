import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

import Layout from '../components/layout'
import { Provider } from "react-redux";
import {store} from '../redux/store.js'
const queryClient = new QueryClient()
export default function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </Provider>
    </QueryClientProvider>
  )
}



