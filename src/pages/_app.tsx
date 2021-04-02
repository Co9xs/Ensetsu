import 'modern-css-reset/dist/reset.min.css'
import React from 'react';
import { AppProps } from 'next/app';
import { AuthProvider } from '../context/Auth';
import { HeaderLayout } from '../components/layouts/HeaderLayout';
import { NoHeaderLayout } from '../components/layouts/NoHeaderLayout';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  switch (pageProps.layout) {
    case ('hasHeader'):
      return (
        <AuthProvider>
          <HeaderLayout>
            <Component {...pageProps} />
          </HeaderLayout>
        </AuthProvider>
      )
    case ('noHeader'):
      return (
        <AuthProvider>
          <NoHeaderLayout>
            <Component {...pageProps} />
          </NoHeaderLayout>
        </AuthProvider>
      )
    default:
      return (
        <AuthProvider>
          <HeaderLayout>
            <Component {...pageProps} />
          </HeaderLayout>
        </AuthProvider>
      )
  }
}

export default App