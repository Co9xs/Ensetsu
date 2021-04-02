import React from 'react';
import { AppProps } from 'next/app';
import { AuthProvider } from '../context/Auth';
import { BasicLayout } from '../components/layouts/BasicLayout';
import 'modern-css-reset/dist/reset.min.css'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <AuthProvider>
      <BasicLayout>
        <Component {...pageProps} />
      </BasicLayout>
    </AuthProvider>
  )
}

export default App