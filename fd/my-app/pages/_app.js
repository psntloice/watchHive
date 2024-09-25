import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

import Layout from '../components/layout'
const queryClient = new QueryClient()
export default function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </QueryClientProvider>
  )
}