import type { AppProps } from 'next/app';

import '@/src/styles/global.css';

import TanstackQueryProvider from '@/src/components/Providers/TanstackQueryProvider';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <TanstackQueryProvider dehydratedState={pageProps.dehydratedState}>
      <Component {...pageProps} />
    </TanstackQueryProvider>
  );
};

export default App;
