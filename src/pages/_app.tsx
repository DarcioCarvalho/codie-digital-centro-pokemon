import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../styles/theme';
import GlobalStyles from '../styles/globalStyles';
import { Layout } from '../components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
